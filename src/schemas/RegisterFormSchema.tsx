import { z } from "zod";

export const RegisterFormSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  phoneNumber: z.string().min(2, {
    message: "Phone number must be at least 2 characters.",
  }),
  gender: z.string().min(2, {
    message: "Gender must be at least 2 characters.",
  }),
  birthdayDate: z.date(),
  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),
  attributes: z.string(),
  soulmateAttributes: z.string(),
});
