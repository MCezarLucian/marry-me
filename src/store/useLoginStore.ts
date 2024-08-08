import { BACKEND_API_URL } from "../configuration/api";
import { UserType } from "../lib/types";
import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

interface LoginResponseType {
  status: string;
  message?: string;
  data: {
    status: string;
    user: UserType;
    sessionToken: string;
  };
}

interface LoginType {
  user: UserType | null;
  loading: boolean;
  error: string | null;
  status: string | null;
  message: string | null;
  sessionToken: string | null;
  fetchLogin: (email: string, password: string) => Promise<void>;
}

interface LoginForm {
  email: string;
  password: string;
}

const useLoginStore = create<LoginType>((set) => ({
  user: null,
  loading: false,
  error: null,
  status: null,
  message: null,
  sessionToken: null,

  fetchLogin: async (email: string, password: string) => {
    const login: LoginForm = { email, password };
    let formLogin: string[] = [];
    for (let property in login) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(
        login[property as keyof LoginForm]
      );
      formLogin.push(`${encodedKey}=${encodedValue}`);
    }
    const formLoginString = formLogin.join("&");

    set({ loading: true, error: null, status: null, message: null });
    try {
      const response = await axios.post<LoginResponseType>(
        `${BACKEND_API_URL}/user/authenticate`,
        formLoginString,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      // console.log(response.data);
      const { status, message, data } = response.data;
      set({
        user: data.user,
        loading: false,
        status,
        message: message ?? null,
        sessionToken: data.sessionToken,
      });
      Cookies.set("sessionToken", data.sessionToken, { expires: 1 });
      Cookies.set("id", data.user.id, { expires: 1 });
    } catch (error: any) {
      const status = error.response.data.status;
      const message = error.response.data.message;

      set({
        error: error instanceof Error ? error.message : "An error occurred",
        status,
        message,
        loading: false,
      });
    }
  },
}));

export default useLoginStore;
