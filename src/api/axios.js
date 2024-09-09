import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;
const JSON_API_URL = import.meta.env.VITE_JSON_API_URL;
const accessToken = localStorage.getItem("accessToken");

export const auth = axios.create({
  baseURL: API_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export const api = axios.create({
  baseURL: API_URL,
});

export const jsonApi = axios.create({
  baseURL: JSON_API_URL,
});
