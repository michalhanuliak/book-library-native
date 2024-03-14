import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";
import { Book, BookCreateData } from "@/domain";

const url = "/books";

export const createBookApi = (data: BookCreateData): Promise<Book> => {
  return axiosInstance(url, { method: "POST", data });
};

const createBookMutationKey = [url];

export const useCreateBookMutation = (
  options?: UseMutationOptions<Book, Error, BookCreateData, Book[]>
) => {
  return useMutation({
    mutationFn: createBookApi,
    mutationKey: createBookMutationKey,
    ...options,
  });
};
