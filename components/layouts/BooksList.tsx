import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
  RefreshControl,
} from "react-native";
import { BookPreview } from "../organisms/BookPreview";
import { Book } from "@/domain";
import { useRouter } from "expo-router";
import { SearchBar } from "../atoms/SearchBar";
import { useState } from "react";

export type BooksListProps = {
  books: Book[];
  isFetching?: boolean;
  onRefresh?: () => void;
};

export function BooksList({
  books,
  onRefresh,
  isFetching = false,
}: BooksListProps) {
  const router = useRouter();

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  const { width } = Dimensions.get("window");
  const column = 2;
  const margin = 10;
  const SIZE = (width - margin * column * 2) / column;

  const handleNavigate = (id: string) => {
    router.push({ pathname: `/detail`, params: { id } });
  };

  const filteredBooks = books.filter((book) =>
    book.title.includes(searchPhrase)
  );

  return (
    <SafeAreaView>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={onRefresh} />
        }
        initialNumToRender={4}
        data={filteredBooks}
        contentContainerStyle={{ gap: 12, justifyContent: "center" }}
        keyExtractor={(item) => item._id}
        numColumns={column}
        columnWrapperStyle={styles.column}
        renderItem={({
          item: { _id, title, author, rating, coverImageUrl },
        }) => (
          <View style={{ margin: margin, width: SIZE }}>
            <BookPreview
              title={title}
              author={author}
              rating={rating}
              coverImageUrl={coverImageUrl}
              handleNavigate={() => handleNavigate(_id)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  column: {
    justifyContent: "center",
  },
});
