import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PasswordChangeSchema } from "../../schemas/PasswordResetSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const SetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfimPassword, setShowConfirmPassword] = useState(false);
  const form = useForm<z.infer<typeof PasswordChangeSchema>>({
    resolver: zodResolver(PasswordChangeSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  const onSubmit = (values: z.infer<typeof PasswordChangeSchema>) => {
    //api
  };

  return (
    <>
      <Form {...form}>
        <form
          className="font-Inter text-gray-700 rounded-xl w-1/2 h-[64vh] py-14 px-24 bg-white flex flex-col gap-8"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1 className="text-4xl font-bold text-black">Set a Password</h1>
            <div className="flex flex-row gap-2">
              <p className="text-center">
                Your previous password has been reseted. Please set a new
                password for your account.
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
              <Button type="submit" className="w-full">
                Confirm password
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </>
  );
};

export default SetPassword;
