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
  soulmateAttributes: AttributesType[];
  imageUrls: string[];
  profilePicture: string;
};

export type AttributesType = {
  id: string;
  name: string;
  value: number;
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

export type MessageType = {
  id: number;
  senderId: number;
  receiverId: number;
  content: string;
  timestamp: Date;
};

export type ForgotPasswordType = UseFormReturn<
  {
    email: string;
    code: string;
    password: string;
    confirmPassword: string;
  },
  any,
  undefined
>;
