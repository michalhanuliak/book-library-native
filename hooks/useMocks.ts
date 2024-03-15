import { useCreateBookAdapter } from "@/adapters/useBooksAdapter";
import { getBooksQueryKey } from "@/infrastructure/queries/getBooksQuery";
import { queryClient } from "@/infrastructure/queryClient";
import { generateBookMocks } from "@/utils/mocks";

export function useMocks() {
  const { createBook, isPending } = useCreateBookAdapter();

  const createBookEntries = (entriesCount: number) => {
    const queryKey = getBooksQueryKey();
    const books = generateBookMocks(entriesCount);
    books.forEach((book) => createBook(book));
    queryClient.invalidateQueries({ queryKey });
  };

  return { createBookEntries, isPending };
}
