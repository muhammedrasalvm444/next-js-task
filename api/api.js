import axios from "axios";
import { toast } from "react-toastify";
export const login = async (data) => {
  try {
    const response = await axios?.post(
      "https://interview.enfono.com/api_bcc/api/auth/login/",
      {
        username: data?.username,
        password: data?.password,
      }
    );

    toast.success("Login successful");
    return response?.data;
  } catch (error) {
    toast.error(error.response?.data?.message);
    throw error.response?.data || error.message;
  }
};

export const getBanners = async ({ token, setBannerLoading }) => {
  setBannerLoading(true);
  try {
    const response = await axios.get(
      "https://interview.enfono.com/api_bcc/api/admin_panel/banners",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setBannerLoading(false);
    return response.data;
  } catch (error) {
    setBannerLoading(false);

    toast?.error(error.response?.data?.message);
    throw error.response?.data || error.message;
  }
};
