import { BACKEND_API_URL } from "../configuration/api";
import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

interface CoverImagesType {
  coverIamges: string[] | null;
  status: string | null;
  loading: boolean;
  error: string | null;
  fetchCoverImages: (userId: string, filesToUpload: File[]) => Promise<void>;
}

const useCoverImagesStore = create<CoverImagesType>((set) => ({
  status: null,
  coverIamges: [],
  loading: false,
  error: null,

  fetchCoverImages: async (userId: string, filesToUpload: File[]) => {
    const formData = new FormData();
    filesToUpload.forEach((file, index) => {
      formData.append(`filesToUpload[]`, file);
    });

    set({ loading: true, error: null, status: null });
    // console.log("api", `${BACKEND_API_URL}/user/${api}`);
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/${userId}/set-cover-pictures`,
        formData,
        {
          headers: {
            "x-token": `${Cookies.get("sessionToken")}`,
          },
        }
      );
      const { data } = response.data;
      //   console.log("store", response);
      set({
        coverIamges: data,
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

export default useCoverImagesStore;
