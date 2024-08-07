import Cookies from "js-cookie";
import { BACKEND_API_URL } from "../configuration/api";
import { UserType } from "../lib/types";
import axios from "axios";
import { create } from "zustand";

interface UserStoreType {
  users: UserType[];
  user: UserType | null;
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
}

const useUserStore = create<UserStoreType>((set) => ({
  users: [],
  user: null,
  loading: false,
  error: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get<UserType[]>(
        `${BACKEND_API_URL}/user/index`,
        {
          headers: {
            Authorization: `session_id Cookies.get("sessionToken")`,
          },
        }
      );
      set({ users: response.data, loading: false });
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
      const response = await axios.get<UserType>(
        `${BACKEND_API_URL}/user/index/${id}`
      );
      set({ user: response.data, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },
}));

export default useUserStore;
