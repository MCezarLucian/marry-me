import { BACKEND_API_URL } from "../configuration/api";
import { AttributesType } from "../lib/types";
import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

interface RatingType {
  attributes: AttributesType[];
  status: string | null;
  loading: boolean;
  error: string | null;
  fetchRateAttribute: (
    userId: string,
    attributeId: string,
    value: string
  ) => Promise<void>;
  initializeAttributes: (attributeList: AttributesType[]) => void;
}

const useRatingStore = create<RatingType>((set) => ({
  status: null,
  attributes: [],
  loading: false,
  error: null,

  initializeAttributes: (attributeList: AttributesType[]) => {
    set({ attributes: attributeList });
  },

  fetchRateAttribute: async (
    userId: string,
    attributeId: string,
    value: string
  ) => {
    const api = `${userId}/personal-attribute/${attributeId}/rate/${value}`;
    set({ loading: true, error: null, status: null });
    try {
      const response = await axios.post(`${BACKEND_API_URL}/user/${api}`, {
        headers: {
          "x-token": `${Cookies.get("sessionToken")}`,
        },
      });
      const { data } = response.data;
      set({
        attributes: data,
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

export default useRatingStore;
