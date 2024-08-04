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

interface ConfirmEmailProps {
  form: ForgotPasswordType;
  validateCode: (e: React.MouseEvent) => void;
}

const ConfirmEmail = ({ form, validateCode }: ConfirmEmailProps) => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold text-black">Confirm Email</h1>
        <div className="flex flex-row gap-2">
          <p>Check your Email and Enter Confirmation Code</p>
        </div>
      </div>
      <div className="h-[80%] w-full flex justify-between flex-col">
        <div className="flex flex-col justify-center gap-4">
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Code</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={(e) => validateCode(e)} className="w-full">
            Confirm Email
          </Button>
        </div>
        <div className="flex w-full flex-col items-center border-t-2 border-gray-200">
          <p className="p-8">Haven't received your code?</p>
          <Button variant="outline" className="w-full">
            Resend Code
          </Button>
        </div>
      </div>
    </>
  );
};

export default ConfirmEmail;
