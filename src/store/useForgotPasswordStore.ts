import { BACKEND_API_URL } from "../configuration/api";
import axios from "axios";
import { create } from "zustand";

interface ChatType {
  data: string | null;
  message: string | null;
  status: string | null;
  loading: boolean;
  error: string | null;
  fetchSendEmail: (email: string) => Promise<void>;
  fetchChangePassword: (
    password: string,
    confirmPassword: string,
    token: string
  ) => Promise<void>;
}

const useChatStore = create<ChatType>((set) => ({
  data: null,
  status: null,
  message: null,
  loading: false,
  error: null,

  fetchSendEmail: async (email: string) => {
    set({ loading: true, error: null, status: null });
    const formData = new FormData();
    formData.append("email", email);
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/password-reset`,
        formData
      );
      const { data, status } = response.data;
      console.log("store", response);
      set({
        data: data,
        status: status,
        loading: false,
      });
    } catch (error: any) {
      console.log(error);
      const { data, status } = error.response.data;
      set({
        data: data,
        status: status,
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  fetchChangePassword: async (
    password: string,
    confirmPassword: string,
    token: string
  ) => {
    console.log("token", token);
    const formData = new FormData();
    formData.append("password", password);
    formData.append("password_confirmation", confirmPassword);
    set({ loading: true, error: null, status: null });
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/set-password/${token}`,
        formData,
        {
          headers: {
            "x-token": token,
          },
        }
      );
      const { data, status } = response.data;
      console.log("store", response);
      set({
        data: data,
        status: status,
        loading: false,
      });
    } catch (error: any) {
      const { data, status } = error.response.data;
      console.log("error", error);
      set({
        data: data,
        status: status,
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));

export default useChatStore;
