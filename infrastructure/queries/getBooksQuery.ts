import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axiosInstace";

const url = "/books";

export const getBooksApi = async () => {
  return await axiosInstance(url);
};

export const getBooksQueryKey = () => [url];

export const useGetBooksQuery = () => {
  return useQuery({
    queryKey: getBooksQueryKey(),
    queryFn: getBooksApi,
  });
};
