import { useCreateBookAdapter } from "@/adapters/useBooksAdapter";
import { getBooksQueryKey } from "@/infrastructure/queries/getBooksQuery";
import { queryClient } from "@/infrastructure/queryClient";
import { generateBookMocks } from "@/utils/mocks";

export function useMocks() {
  const { createBook } = useCreateBookAdapter();

  const createBookEntries = (entriesCount: number) => {
    const queryKey = getBooksQueryKey();
    const books = generateBookMocks(entriesCount);
    books.forEach((book) => createBook(book));
    const invalidateBooksQuery = queryClient.invalidateQueries({ queryKey });
  };

  return { createBookEntries };
}
