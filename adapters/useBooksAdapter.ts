import { useQueryClient } from "@tanstack/react-query";
import {
  getBooksQueryKey,
  useGetBooksQuery,
} from "@/infrastructure/queries/getBooksQuery";
import { useCreateBooksMutation } from "@/infrastructure/mutations/createBooksMutation";
import { queryClient } from "@/infrastructure/queryClient";

type Book = any;

export function useGetBooksAdapter() {
  const { data, error, isLoading } = useGetBooksQuery();
  return { data, error, isLoading };
}

export function useCreateBooksAdapter() {
  const queryKey = getBooksQueryKey();

  const { mutate, error } = useCreateBooksMutation({
    onMutate: async (newBook: Book) => {
      await queryClient.cancelQueries({ queryKey });

      const previousTodos = queryClient.getQueryData(queryKey);

      queryClient.setQueryData(queryKey, (old: Book[]) => [...old, newBook]);

      return { previousTodos };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(queryKey, context.previousTodos);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });

  const createBook = async (book: any) => {
    mutate(book);
  };

  return { createBook, error };
}
