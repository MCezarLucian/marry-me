import Cookies from "js-cookie";
import { BACKEND_API_URL } from "../configuration/api";
import { UserType } from "../lib/types";
import axios from "axios";
import { create } from "zustand";

interface UserStoreType {
  users: UserType[];
  status: string | null;
  user: UserType | null;
  filteredUsers: UserType[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
  fetchFilteredUsers: (category: string[], value: string[]) => Promise<void>;
}

const useUserStore = create<UserStoreType>((set) => ({
  users: [],
  filteredUsers: [],
  user: null,
  loading: false,
  error: null,
  status: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${BACKEND_API_URL}/user/index`, {
        headers: {
          Authorization: `session_id ${Cookies.get("sessionToken")}`,
        },
      });
      console.log(response.data.data);
      set({ users: response.data.data, loading: false });
    } catch (error: any) {
      // console.log(error.response.data);
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  fetchUserById: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${BACKEND_API_URL}/user/index/${id}`, {
        headers: {
          Authorization: `session_id ${Cookies.get("sessionToken")}`,
        },
      });
      set({ user: response.data.data, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  fetchFilteredUsers: async (category: string[], value: string[]) => {
    let query = "?";
    for (let i = 0; i < category.length; i++) {
      if (i < category.length - 1) {
        query = query + category[i] + "=" + value[i] + "&";
      } else {
        query = query + category[i] + "=" + value[i];
      }
    }
    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${BACKEND_API_URL}/user/listBy${query}`,
        {
          headers: {
            Authorization: `session_id ${Cookies.get("sessionToken")}`,
          },
        }
      );
      // console.log(response);
      set({
        user: response.data.data,
        loading: false,
        status: response.data.status,
      });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));

export default useUserStore;
