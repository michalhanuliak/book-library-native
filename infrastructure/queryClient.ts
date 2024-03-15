import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      // Update all data locally and send only updates to the server
      // We are using book library as an example, so we don't need freshest data
      staleTime: 1000 * 60 * 60,
    },
  },
});
