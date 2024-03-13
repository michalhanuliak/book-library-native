import { useQueryClient } from "@tanstack/react-query";
import {
  getBooksQueryKey,
  useGetBooksQuery,
} from "@/infrastructure/queries/getBooksQuery";
import { useGetBookQuery } from "@/infrastructure/queries/getBookQuery";
import { useCreateBooksMutation } from "@/infrastructure/mutations/createBooksMutation";
import { queryClient } from "@/infrastructure/queryClient";
import { Book, BookCreateData } from "@/domain";

export function useGetBooksAdapter() {
  const { data, error, isFetching, refetch } = useGetBooksQuery();

  return { books: data ?? [], error, isFetching, refetch };
}

export function useGetBookAdapter(id: string) {
  const { data, error, isFetching } = useGetBookQuery(id);
  return { book: data, error, isFetching };
}

export function useCreateBooksAdapter() {
  const { mutate, error } = useCreateBooksMutation();

  const createBook = async (book: BookCreateData) => {
    mutate(book);
  };

  return { createBook, error };
}
