import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";
import { Book } from "@/domain";

const url = "/books";

export const getBooksApi = (): Promise<Book[]> => {
  return axiosInstance(url);
};

export const getBooksQueryKey = () => [url];

export const useGetBooksQuery = () => {
  return useQuery<Book[]>({
    queryKey: getBooksQueryKey(),
    queryFn: getBooksApi,
  });
};
