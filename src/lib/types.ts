import { UseFormReturn } from "react-hook-form";

export type UserType = {
  id: string;
  fullName: string;
  email: string;
  age: number;
  phoneNumber: string;
  gender: string;
  rating: number;
  roleId: string;
  roleType: string;
  dateOfBirth: Date;
  description: string;
  personalAttributes: AttributesType[];
  searchedAttributes: AttributesType[];
  coverPictures: string[];
  profilePicture: string;
};

export type AttributesType = {
  attributeId: string;
  attributeName: string;
  value: string;
};

export type RegisterFormType = UseFormReturn<
  {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    birthdayDate: string;
    description: string;
    attributes: string;
    soulmateAttributes: string;
    password: string;
    confirmPassword: string;
  },
  any,
  undefined
>;

export type SignupMapType = {
  role_type: string;
  full_name: string;
  email: string;
  phone_number: string;
  gender: string;
  date_of_birth: string;
  description?: string;
  personal_attributes?: string[];
  searched_attributes?: string[];
  password: string;
};

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
  },
  any,
  undefined
>;
