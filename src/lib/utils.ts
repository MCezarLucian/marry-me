import { type ClassValue, clsx } from "clsx";
import Cookies from "js-cookie";
import { twMerge } from "tailwind-merge";
import { RegisterFormType } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logOut = () => {
  Cookies.remove("id");
  Cookies.remove("sessionToken");
};

export const errorState = (field: string, form: RegisterFormType): number => {
  if (field && form.formState.isSubmitted) {
    switch (field) {
      case "firstName":
        return 1;
      case "lastName":
        return 1;
      case "email":
        return 1;
      case "phoneNumber":
        return 2;
      case "gender":
        return 2;
      case "birthdayDate":
        return 2;
      case "description":
        return 3;
      case "attributes":
        return 4;
      case "soulmateAttributes":
        return 5;
      case "password":
        return 4;
      case "confirmPassword":
        return 4;
      default:
        break;
    }
  }
  return 1;
};
