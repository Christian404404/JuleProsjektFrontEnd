import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:1337/api", // Backend API url
  withCredentials: true, // Cookies support
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    console.error("Error retrieving token from localStorage", err);
  }
  return config;
});

export default api;
