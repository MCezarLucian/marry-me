import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ForgotPasswordType } from "../../lib/types";

interface PasswordRequestProps {
  form: ForgotPasswordType;
  validateEmail: (e: React.MouseEvent) => void;
}

const PasswordRequest = ({ form, validateEmail }: PasswordRequestProps) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold text-black">Password Reset</h1>
        <div className="flex flex-row gap-2">
          <p>We will help you to reset your password</p>
        </div>
      </div>
      <div className="h-[80%] w-full flex justify-between flex-col">
        <div className="flex flex-col justify-center gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={(e) => validateEmail(e)} className="w-full">
            Reset Password
          </Button>
        </div>
        <div className="flex w-full flex-col items-center border-t-2 border-gray-200">
          <p className="p-8">Remember yout password?</p>
          <Button variant="outline" className="w-full">
            Back to Sign In
          </Button>
        </div>
      </div>
    </>
  );
};

export default PasswordRequest;
