import { useGetBooksAdapter } from "@/adapters/useBooksAdapter";
import { BooksList } from "@/components/layouts/BooksList";
import Layout from "@/constants/Layout";
import { StyleSheet, View, Text } from "react-native";

export default function TabOneScreen() {
  const { books, refetch, isFetching } = useGetBooksAdapter();

  return (
    <View style={styles.container}>
      <BooksList books={books} onRefresh={refetch} isFetching={isFetching} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Layout.containerPadding,
  },
});
