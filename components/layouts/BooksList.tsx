import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  View,
  Dimensions,
  RefreshControl,
  ListRenderItemInfo,
} from "react-native";
import { BookPreview } from "../organisms/BookPreview";
import { Text } from "../atoms/Text";
import { Book } from "@/domain";
import { useRouter } from "expo-router";
import { SearchBar } from "../atoms/SearchBar";
import { useCallback, useMemo, useState } from "react";

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
  const SIZE = (width - 14 * column * 2) / column;

  const handleNavigate = useCallback(
    (id: string) => {
      router.push({ pathname: `/detail`, params: { id } });
    },
    [router]
  );

  const filteredBooks = useMemo(
    () =>
      books.filter((book) =>
        book.title.toLowerCase().includes(searchPhrase.toLocaleLowerCase())
      ),
    [books]
  );

  const renderItems = useCallback(
    (info: ListRenderItemInfo<Book>) => {
      const { _id, title, author, rating, coverImageUrl } = info.item;

      return (
        <View style={{ width: SIZE }}>
          <BookPreview
            title={title}
            author={author}
            rating={rating}
            coverImageUrl={coverImageUrl}
            handleNavigate={() => handleNavigate(_id)}
          />
        </View>
      );
    },
    [books]
  );

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />

      {filteredBooks.length > 0 ? (
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
          renderItem={renderItems}
        />
      ) : (
        <Text>No books found</Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 12,
  },
  column: {
    gap: 12,
  },
});
