import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";

const url = "/books";

export const createBooksApi = async (data: any) => {
  return await axiosInstance(url, { method: "POST", data });
};

const createBooksMutationKey = [url];

export const useCreateBooksMutation = (mutationConfig) => {
  return useMutation({
    mutationFn: createBooksApi,
    mutationKey: createBooksMutationKey,
    ...mutationConfig,
  });
};
