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
import { useGetBookAdapter } from "@/adapters/useBooksAdapter";

export default function BookDetailPage() {
  const param = useGlobalSearchParams();
  const id = param.id as string;

  const { book, isFetching } = useGetBookAdapter(id);

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
      <BookDetail book={book} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
