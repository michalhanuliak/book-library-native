import { StatusBar } from "expo-status-bar";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from "react-native";
import { useRouter, useGlobalSearchParams } from "expo-router";
import { BookDetail } from "@/components/organisms/BookDetail";
import {
  useEditBookAdapter,
  useGetBookAdapter,
} from "@/adapters/useBooksAdapter";
import { BookEdit } from "@/components/organisms/BookEdit";
import { BookCreateData } from "@/domain";

export default function BookEditPage() {
  const param = useGlobalSearchParams();
  const id = param.id as string;

  const { editBook } = useEditBookAdapter(id);
  const { book, isFetching } = useGetBookAdapter(id);

  const handleBookEdit = async (book: BookCreateData) => {
    await editBook(book);
  };

  if (isFetching) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Book {id} not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <BookEdit book={book} onSubmit={handleBookEdit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
