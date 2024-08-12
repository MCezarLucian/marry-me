import { BACKEND_API_URL } from "../configuration/api";
import axios from "axios";
import { create } from "zustand";
import Cookies from "js-cookie";

interface RatingType {
  profile: string | null;
  status: string | null;
  loading: boolean;
  error: string | null;
  fetchProfilePicture: (userId: string, fileToUpload: File) => Promise<void>;
}

const useProfileStore = create<RatingType>((set) => ({
  status: null,
  profile: null,
  loading: false,
  error: null,

  fetchProfilePicture: async (userId: string, fileToUpload: File) => {
    const formData = new FormData();
    formData.append("fileToUpload", fileToUpload);

    set({ loading: true, error: null, status: null });
    // console.log("api", `${BACKEND_API_URL}/user/${api}`);
    try {
      const response = await axios.post(
        `${BACKEND_API_URL}/user/${userId}/set-profile-picture`,
        formData,
        {
          headers: {
            "x-token": `${Cookies.get("sessionToken")}`,
          },
        }
      );
      const { data } = response.data;
      // console.log("store", data);
      set({
        profile: data,
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

export default useProfileStore;
