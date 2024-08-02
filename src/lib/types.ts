import { UseFormReturn } from "react-hook-form";

export type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phoneNumber: string;
  gender: string;
  birthdayDate: Date;
  description: string;
  attributes: string[];
  soulmateAttributes: string[];
  imageUrls: string[];
  profilePicture: string;
};

export type RegisterFormType = UseFormReturn<
  {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    birthdayDate: Date;
    description: string;
    attributes: string;
    soulmateAttributes: string;
  },
  any,
  undefined
>;
