import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 30000,
});

export const deleteIdea = (id) => API.delete(`/ideas/${id}`);

export default API;