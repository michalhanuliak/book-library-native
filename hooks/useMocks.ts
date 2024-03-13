import { useCreateBooksAdapter } from "@/adapters/useBooksAdapter";
import { getBooksQueryKey } from "@/infrastructure/queries/getBooksQuery";
import { queryClient } from "@/infrastructure/queryClient";
import { generateBookMocks } from "@/utils/mocks";

const queryKey = getBooksQueryKey();
const books = generateBookMocks();

export function useMocks() {
  const { createBook } = useCreateBooksAdapter();

  const createBookEntries = () => {
    books.forEach((book) => createBook(book));
    const invalidateBooksQuery = queryClient.invalidateQueries({ queryKey });
  };

  return { createBookEntries };
}
