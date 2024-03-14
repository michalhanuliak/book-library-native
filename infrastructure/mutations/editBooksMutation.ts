import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";
import { Book, BookEditData } from "@/domain";

const getUrl = (id: string) => `/books/${id}`;

export const editBookApi = (id: string, data: BookEditData): Promise<Book> => {
  return axiosInstance(getUrl(id), { method: "PUT", data });
};

const getEditMutationKey = (id: string) => [getUrl(id)];

export const useEditBookMutation = (
  id: string,
  options?: UseMutationOptions<Book, Error, BookEditData, Book[]>
) => {
  return useMutation({
    mutationFn: (data) => editBookApi(id, data),
    mutationKey: getEditMutationKey(id),
    ...options,
  });
};
