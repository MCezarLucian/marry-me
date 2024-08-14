import Cookies from "js-cookie";
import { BACKEND_API_URL } from "../configuration/api";
import { UserType } from "../lib/types";
import axios from "axios";
import { create } from "zustand";

interface UserStoreType {
  users: UserType[];
  status: string | null;
  loggedUser: UserType | null;
  user: UserType | null;
  filteredUsers: UserType[];
  loading: boolean;
  error: string | null;
  fetchUsers: () => Promise<void>;
  fetchUserById: (id: string) => Promise<void>;
  fetchFilteredUsers: (category: string[], value: string[]) => Promise<void>;
  setLoggedUser: (id: string) => Promise<void>;
  fetchUpdateUser: (id: string, formData: FormData) => Promise<void>;
  fetchDeleteUser: (id: string) => Promise<void>;
}

const useUserStore = create<UserStoreType>((set) => ({
  users: [],
  loggedUser: null,
  filteredUsers: [],
  user: null,
  loading: false,
  error: null,
  status: null,

  fetchUsers: async () => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${BACKEND_API_URL}/user/listBy`, {
        headers: {
          "x-token": `${Cookies.get("sessionToken")}`,
        },
      });
      const { data, status } = response.data;

      // let mappedUsers: UserType[] = data.map((data: any) => {
      //   const mappedUser: UserType = {
      //     id: data.id,
      //     fullName: data.full_name,
      //     email: data.email,
      //     age: data.age,
      //     phoneNumber: data.phone_number,
      //     gender: data.gender,
      //     rating: data.rating,
      //     roleId: data.roleId,
      //     roleType: data.role_type,
      //     dateOfBirth: data.date_of_birth,
      //     description: data.description,
      //     personalAttributes: data.personal_attributes,
      //     searchedAttributes: data.searched_attributes,
      //     coverPictures: data.coverPictures,
      //     profilePicture: data.profilePicture,
      //   };
      //   return mappedUser;
      // });
      // console.log(mappedUsers);
      set({ users: data, loading: false, status: status });
    } catch (error: any) {
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
          "x-token": `${Cookies.get("sessionToken")}`,
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

  setLoggedUser: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.get(`${BACKEND_API_URL}/user/index/${id}`, {
        headers: {
          "x-token": `${Cookies.get("sessionToken")}`,
        },
      });
      set({ loggedUser: response.data.data, loading: false });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  fetchFilteredUsers: async (category: string[], value: string[]) => {
    let query = category
      .map((cat, i) => `${cat}=${encodeURIComponent(value[i])}`)
      .join("&");

    set({ loading: true, error: null });
    try {
      const response = await axios.get(
        `${BACKEND_API_URL}/user/listBy?${query}`,
        {
          headers: {
            "x-token": `${Cookies.get("sessionToken")}`,
          },
        }
      );
      set({
        users: response.data.data,
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

  fetchUpdateUser: async (id: string, formData: FormData) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/${id}`,
        formData,
        {
          headers: {
            "x-token": `${Cookies.get("sessionToken")}`,
          },
        }
      );
      console.log(response.data);
      const { data, status } = response.data;
      set({ loggedUser: data, loading: false, status: status });
    } catch (error) {
      set({
        error: error instanceof Error ? error.message : "An error occurred",
        loading: false,
      });
    }
  },

  fetchDeleteUser: async (id: string) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.delete(`${BACKEND_API_URL}/user/${id}`, {
        headers: {
          "x-token": `${Cookies.get("sessionToken")}`,
        },
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
