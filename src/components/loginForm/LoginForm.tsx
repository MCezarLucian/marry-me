import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Form,
} from "../ui/form";
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";
import { LogInFormSchema } from "../../schemas/LoginFormSchema";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof LogInFormSchema>>({
    resolver: zodResolver(LogInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(e: React.MouseEvent) {
    e.preventDefault();
    console.log(form.getValues());
  }

  return (
    <Form {...form}>
      <form className="font-Inter text-gray-700 rounded-xl w-1/2 h-[64vh] py-14 px-24 bg-white flex flex-col gap-4">
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-black">Log In</h1>
          <div className="flex flex-row gap-2">
            <p>New to Marry Me?</p>
            <a href="/" className="text-MainBlue">
              Create an Account
            </a>
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
          </div>
          <div className="flex w-full flex-col gap-8">
            <Button
              className="w-full"
              onClick={(e: React.MouseEvent) => onSubmit(e)}
            >
              Log in
            </Button>
            <div className="flex justify-end w-full">
              <a href="/" className="text-MainBlue">
                Forgot your password?
              </a>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
