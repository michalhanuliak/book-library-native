import { loadStorage } from "@/utils/storage";
import axios, { AxiosError } from "axios";
import { router } from "expo-router";

const REQUEST_MAXIMUM_REACHED_ERROR_MESSAGE =
  "Endpoint has exceeded allowed number of requests";

const REQUEST_INVALID_HASH = "Endpoint doesn't exist.";

const controller = new AbortController();

export const axiosInstance = axios.create({
  signal: controller.signal,
});

axiosInstance.interceptors.response.use(
  (response) => response.data,
  handleRequestMaximumReached
);

axiosInstance.interceptors.request.use(async (config) => {
  const crudHash = await loadStorage("crudHash");
  config.baseURL = `https://crudcrud.com/api/${crudHash}`;
  return config;
});

function handleRequestMaximumReached(error: AxiosError<string>) {
  const isRequestMaximumReachedError = error?.response?.data?.includes(
    REQUEST_MAXIMUM_REACHED_ERROR_MESSAGE
  );

  const isInvalidHashError =
    error?.response?.data?.includes(REQUEST_INVALID_HASH);

  if (isRequestMaximumReachedError || isInvalidHashError) {
    router.push({
      pathname: "/hashSetup",
      params: { errorMessage: error?.response?.data ?? "" },
    });
  }
  return Promise.reject(error);
}
