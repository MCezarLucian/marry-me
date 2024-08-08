import { BACKEND_API_URL } from "../configuration/api";
import { AttributesType } from "../lib/types";
import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

interface RatingType {
  status: string | null;
  attributes: AttributesType[];
  loading: boolean;
  error: string | null;
  fetchRateAttribute: (
    userId: string,
    attributeId: string,
    value: string
  ) => Promise<void>;
}

const useLoginStore = create<RatingType>((set) => ({
  status: null,
  attributes: [],
  loading: false,
  error: null,

  fetchRateAttribute: async (
    userId: string,
    attributeId: string,
    value: string
  ) => {
    const api = `${userId}/personal-attribute/${attributeId}/${value}`;
    set({ loading: true, error: null, status: null });
    try {
      const response = await axios.post(`${BACKEND_API_URL}/user/${api}`, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      // console.log(response.data);
      const { status, data } = response.data;
      set({
        attributes: data.data,
        loading: false,
        status,
      });
      Cookies.set("sessionToken", data.sessionToken, { expires: 1 });
      Cookies.set("id", data.user.id, { expires: 1 });
    } catch (error: any) {
      const status = error.response.data.status;
      // const message = error.response.data.message;

      set({
        error: error instanceof Error ? error.message : "An error occurred",
        status,
        loading: false,
      });
    }
  },
}));

export default useLoginStore;
