import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";
import { Book, BookCreateData } from "@/domain";

const url = "/books";

export const createBooksApi = (data: BookCreateData): Promise<Book> => {
  return axiosInstance(url, { method: "POST", data });
};

const createBooksMutationKey = [url];

export const useCreateBooksMutation = (
  options?: UseMutationOptions<Book, Error, BookCreateData, Book[]>
) => {
  return useMutation({
    mutationFn: createBooksApi,
    mutationKey: createBooksMutationKey,
    ...options,
  });
};
