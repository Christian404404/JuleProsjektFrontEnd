import api from "./axios.js";

export const login = async (email, password) => {
  try {
    const response = await api.post("/auth/login", { email, password });
    localStorage.setItem("token", response.data.token);
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Login failed" };
  }
};

export const register = async (email, password) => {
  try {
    const response = await api.post("/auth/register", { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Registration failed" };
  }
};
