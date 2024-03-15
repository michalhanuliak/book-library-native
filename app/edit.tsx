import { StyleSheet, View, ActivityIndicator } from "react-native";
import { useGlobalSearchParams, router } from "expo-router";
import {
  useEditBookAdapter,
  useGetBookAdapter,
} from "@/adapters/useBooksAdapter";
import { BookEdit } from "@/components/organisms/BookEdit";
import { BookEditForm } from "@/domain";
import Layout from "@/constants/Layout";
import { Text } from "@/components/atoms/Text";

export default function BookEditPage() {
  const param = useGlobalSearchParams();
  const id = param.id as string;

  const { editBook } = useEditBookAdapter(id);
  const { book, isFetching } = useGetBookAdapter(id);

  const handleBookEdit = async (book: BookEditForm) => {
    await editBook({
      ...book,
      pageCount: parseInt(book.pageCount),
      rating: parseInt(book.rating),
    });
    router.navigate({ pathname: `/detail`, params: { id } });
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
    padding: Layout.containerPadding,
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
