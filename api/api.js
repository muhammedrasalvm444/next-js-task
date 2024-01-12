import axios from "axios";
import { toast } from "react-toastify";

// const BASE_URL = "https://interview.enfono.com/api_bcc/api";

// const api = axios.create({
//   baseURL: BASE_URL,
// });

export const login = async (data) => {
  console.log("api", data);
  try {
    const response = await axios.post(
      "https://interview.enfono.com/api_bcc/api/auth/login",
      { username: data?.username, password: data?.password }
      // {
      //   maxRedirects: 5,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }
    );
    return response.data.token;
  } catch (error) {
    toast?.error(error.response?.data?.message);
    throw error.response?.data || error.message;
  }
};

export const getBanners = async (token) => {
  try {
    const response = await axios.get(
      "https://interview.enfono.com/api_bcc/api/admin_panel/banners",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
    toast?.error(error.response?.data?.message);
    throw error.response?.data || error.message;
  }
};
