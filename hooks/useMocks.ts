import { useCreateBookAdapter } from "@/adapters/useBooksAdapter";
import { getBooksQueryKey } from "@/infrastructure/queries/getBooksQuery";
import { queryClient } from "@/infrastructure/queryClient";
import { generateBookMocks } from "@/utils/mocks";
import { Alert } from "react-native";

export function useMocks() {
  const { createBook, isPending } = useCreateBookAdapter();

  const createBookEntries = (entriesCount: number) => {
    const queryKey = getBooksQueryKey();
    const books = generateBookMocks(entriesCount);
    const createBookPromises = books.map((book) => createBook(book));

    Promise.all(createBookPromises).then(() => {
      queryClient.resetQueries({ queryKey });
      Alert.alert("Books created");
    });
  };

  return { createBookEntries, isPending };
}
