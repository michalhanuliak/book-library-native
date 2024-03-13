import axios from "axios";

const crudHash = "5adb681f7925499eacf2028ae60b7139";

export const axiosInstance = axios.create({
  baseURL: `https://crudcrud.com/api/${crudHash}`,
});

axiosInstance.interceptors.response.use((response) => response.data);
