import { BACKEND_API_URL } from "../configuration/api";
import { SignupMapType } from "../lib/types";
import axios from "axios";
import { create } from "zustand";

interface SignupResponseType {
  status: string;
  message?: string;
  data?: {
    sessionToken?: string;
  };
}

interface SignupType {
  loading: boolean;
  error: string | null;
  status: string | null;
  message: string | null;
  sessionToken: string | null;
  fetchSignUp: (formData: SignupMapType) => Promise<void>;
}

const useSignUpStore = create<SignupType>((set) => ({
  loading: false,
  error: null,
  status: null,
  message: null,
  sessionToken: null,

  fetchSignUp: async (formData: SignupMapType) => {
    let formSignup: string[] = [];
    for (let property in formData) {
      if (formData[property as keyof SignupMapType] !== undefined) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(
          formData[property as keyof SignupMapType]?.toString() ?? ""
        );
        formSignup.push(`${encodedKey}=${encodedValue}`);
      }
    }
    const formSignupString = formSignup.join("&");

    set({ loading: true, error: null, status: null, message: null });
    try {
      const response = await axios.post<SignupResponseType>(
        `${BACKEND_API_URL}/user/register`,
        formSignupString,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const { status, message, data } = response.data;
      set({
        loading: false,
        status,
        message: message ?? null,
        sessionToken: data?.sessionToken ?? null,
      });
    } catch (error: any) {
      const status = error.response?.data?.status ?? "error";
      const message = error.response?.data?.data ?? "An error occurred";

      set({
        error: error instanceof Error ? error.message : "An error occurred",
        status,
        message,
        loading: false,
      });
    }
  },
}));

export default useSignUpStore;
