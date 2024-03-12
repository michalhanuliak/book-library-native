import axios from "axios";

const crudHash = "4f79e778f13f4651a619d863806a20f8";

export const axiosInstance = axios.create({
  baseURL: `https://crudcrud.com/api/${crudHash}`,
});

axiosInstance.interceptors.response.use((response) => response.data);
