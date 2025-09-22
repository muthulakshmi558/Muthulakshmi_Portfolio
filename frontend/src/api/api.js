import axios from "axios";

const vite_base_url = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api/";

const api = axios.create({
  baseURL: vite_base_url,
});

export default api;
