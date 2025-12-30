import api from "./axios.js";

export const fetchProfile = async () => {
  try {
    const response = await api.get("/user/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data || { error: "Fetching profile failed" };
  }
};
