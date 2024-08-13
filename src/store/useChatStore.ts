import { BACKEND_API_URL } from "../configuration/api";
import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";
import { MessageType } from "@/lib/types";

interface ChatType {
  messages: MessageType[] | null;
  status: string | null;
  loading: boolean;
  error: string | null;
  fetchAllMessages: (userId: string, receiverId: string) => Promise<void>;
  fetchSendMessage: (
    userId: string,
    receiverId: string,
    messageContent: string
  ) => Promise<void>;
}

const useChatStore = create<ChatType>((set) => ({
  status: null,
  messages: [],
  loading: false,
  error: null,

  fetchAllMessages: async (userId: string, receiverId: string) => {
    set({ loading: true, error: null, status: null });
    try {
      const response = await axios.get(
        `${BACKEND_API_URL}/user/${userId}/chat/${receiverId}`,
        {
          headers: {
            "x-token": `${Cookies.get("sessionToken")}`,
          },
        }
      );
      const { data } = response.data;
      //   console.log("store", response);
      set({
        messages: data,
        status: response.data,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  fetchSendMessage: async (
    userId: string,
    receiverId: string,
    messageContent: string
  ) => {
    const formData = new FormData();
    formData.append("content", messageContent);
    set({ loading: true, error: null, status: null });
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/${userId}/chat/${receiverId}`,
        formData,
        {
          headers: {
            "x-token": `${Cookies.get("sessionToken")}`,
          },
        }
      );
      const { data } = response.data;
      console.log("store", response);
      set({
        messages: data,
        status: response.data,
        loading: false,
      });
    } catch (error: any) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));

export default useChatStore;
