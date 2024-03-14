import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";
import { Book } from "@/domain";

const url = (id: string) => `/books/${id}`;

export const getBookApi = (id: string): Promise<Book> => {
  return axiosInstance(url(id));
};

export const getBookQueryKey = (id: string) => [url(id)];

export const useGetBookQuery = (id: string) => {
  return useQuery<Book>({
    queryKey: getBookQueryKey(id),
    queryFn: () => getBookApi(id),
  });
};
