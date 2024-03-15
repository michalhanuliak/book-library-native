import { useQueryClient } from "@tanstack/react-query";
import {
  getBooksQueryKey,
  useGetBooksQuery,
} from "@/infrastructure/queries/getBooksQuery";
import {
  getBookQueryKey,
  useGetBookQuery,
} from "@/infrastructure/queries/getBookQuery";
import { useCreateBookMutation } from "@/infrastructure/mutations/createBookMutation";
import { queryClient } from "@/infrastructure/queryClient";
import { Book, BookCreateData, BookEditData } from "@/domain";
import { useEditBookMutation } from "@/infrastructure/mutations/editBooksMutation";
import { useRemoveBookMutation } from "@/infrastructure/mutations/removeBookMutation";
import { Alert } from "react-native";

export function useGetBooksAdapter() {
  const { data, error, isFetching, refetch } = useGetBooksQuery();

  return { books: data ?? [], error, isFetching, refetch };
}

export function useGetBookAdapter(id: string) {
  const { data, error, isFetching } = useGetBookQuery(id);
  return { book: data, error, isFetching };
}

export function useCreateBookAdapter() {
  const { mutate, error, isPending } = useCreateBookMutation();

  const createBook = async (book: BookCreateData) => {
    mutate(book);
  };

  return { createBook, error, isPending };
}

export function useEditBookAdapter(id: string) {
  const queryKey = getBooksQueryKey();

  const { mutate, error } = useEditBookMutation(id, {
    onMutate: async (updatedBook) => {
      await queryClient.cancelQueries({ queryKey });

      const previousBooks = queryClient.getQueryData<Book[]>(queryKey);

      if (!previousBooks) {
        return [];
      }

      const bookIndex = previousBooks.findIndex((book) => book._id === id);

      if (bookIndex !== -1) {
        previousBooks[bookIndex] = updatedBook as Book;
      }

      queryClient.setQueryData(queryKey, () => previousBooks);

      return previousBooks;
    },
    onError: (err, editedBook, context) => {
      queryClient.setQueryData(queryKey, context);
    },
    onSuccess: () => {
      Alert.alert("Book edited successfully!");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: getBookQueryKey(id) });
    },
  });

  const editBook = async (book: BookEditData) => {
    mutate(book);
  };

  return { editBook, error };
}

export function useRemoveBookAdapter(id: string) {
  const queryKey = getBooksQueryKey();

  const { mutate, error } = useRemoveBookMutation(id, {
    onMutate: async (removedBook) => {
      await queryClient.cancelQueries({ queryKey });

      let previousBooks = queryClient.getQueryData<Book[]>(queryKey);

      if (!previousBooks) {
        return [];
      }

      previousBooks = previousBooks.filter((book) => book._id !== id);

      queryClient.setQueryData(queryKey, () => previousBooks);

      return previousBooks;
    },
    onError: (err, removedBook, context) => {
      queryClient.setQueryData(queryKey, context);
    },
    onSuccess: () => {
      Alert.alert("Book removed successfully!");
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: getBookQueryKey(id) });
    },
  });

  const removeBook = async () => {
    mutate();
  };

  return { removeBook, error };
}
