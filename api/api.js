import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://interview.enfono.com/api_bcc/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const login = async (username, password) => {
  try {
    const response = await api.post("/auth/login", { username, password });
    return response.data.token;
  } catch (error) {
    toast?.error(error.response?.data?.message);
    throw error.response?.data || error.message;
  }
};

export const getBanners = async (token) => {
  try {
    const response = await api.get("/admin_panel/banners", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.log("error", error);
    toast?.error(error.response?.data?.message);
    throw error.response?.data || error.message;
  }
};
