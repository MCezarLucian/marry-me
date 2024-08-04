import React, { useState } from "react";
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
import { Eye, EyeOff } from "lucide-react";

interface SetPasswordProps {
  form: ForgotPasswordType;
  validatePasswords: (e: React.MouseEvent) => void;
}

const SetPassword = ({ form, validatePasswords }: SetPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfimPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold text-black">Set a Password</h1>
        <div className="flex flex-row gap-2">
          <p className="text-center">
            Your previous password has been reseted. Please set a new password
            for your account.
          </p>
        </div>
      </div>
      <div className="h-[80%] w-full flex justify-between flex-col">
        <div className="flex flex-col justify-center gap-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      {...field}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="text-gray-500" />
                      ) : (
                        <Eye className="text-gray-500" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Re-enter Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showConfimPassword ? "text" : "password"}
                      placeholder="Enter Password"
                      {...field}
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
                      onClick={() =>
                        setShowConfirmPassword(!showConfimPassword)
                      }
                    >
                      {showConfimPassword ? (
                        <EyeOff className="text-gray-500" />
                      ) : (
                        <Eye className="text-gray-500" />
                      )}
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button onClick={(e) => validatePasswords(e)} className="w-full">
            Confirm password
          </Button>
        </div>
      </div>
    </>
  );
};

export default SetPassword;
