import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";
import { Book, BookRemoveData } from "@/domain";

const getUrl = (id: string) => `/books/${id}`;

export const removeBookApi = (id: string): Promise<Book> => {
  return axiosInstance(getUrl(id), { method: "delete" });
};

const getRemoveMutationKey = (id: string) => [getUrl(id)];

export const useRemoveBookMutation = (
  id: string,
  options?: UseMutationOptions
) => {
  return useMutation({
    mutationFn: () => removeBookApi(id),
    mutationKey: getRemoveMutationKey(id),
    ...options,
  });
};
