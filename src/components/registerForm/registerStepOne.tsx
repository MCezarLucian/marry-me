import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { RegisterFormType } from "@/lib/types";
import { Button } from "../ui/button";

interface RegisterStepOneProps {
  form: RegisterFormType;
  handleNext: (e: React.MouseEvent) => void;
}

const RegisterStepOne = ({ form, handleNext }: RegisterStepOneProps) => {
  return (
    <div className="h-[80%] w-full flex justify-between flex-col gap-12">
      <div className="flex flex-col justify-center gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="flex justify-end w-full">
        <Button className="w-1/3" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default RegisterStepOne;
