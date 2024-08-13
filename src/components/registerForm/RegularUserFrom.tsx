import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RegisterFormRegularSchema } from "../../schemas/RegisterFormSchema";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import useSignUpStore from "../../store/useSignupStore";
import Spinner from "../spinner/Spinner";
import { format } from "date-fns";
import { SignupMapType } from "../../lib/types";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const RegularUserForm = () => {
  const { status, message, fetchSignUp, loading } = useSignUpStore((state) => ({
    loading: state.loading,
    status: state.status,
    message: state.message,
    fetchSignUp: state.fetchSignUp,
  }));

  const form = useForm<z.infer<typeof RegisterFormRegularSchema>>({
    resolver: zodResolver(RegisterFormRegularSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      birthdayDate: "",
      password: "",
      confirmPassword: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfimPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (values: z.infer<typeof RegisterFormRegularSchema>) => {
    console.log("Submitting form...");
    const fetchData: SignupMapType = {
      role_type: "Regular",
      full_name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone_number: values.phoneNumber,
      gender: values.gender,
      date_of_birth: format(new Date(values.birthdayDate), "yyyy-MM-dd"),
      password: values.password,
    };

    console.log(fetchData);
    fetchSignUp(fetchData);
  };

  useEffect(() => {
    if (status === "success") {
      navigate("/login");
    }
  }, [navigate, status]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="font-Inter text-gray-700 rounded-xl w-3/4  py-14 px-24 bg-white flex flex-col gap-4"
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-black">Create an Account</h1>
          <div className="flex flex-row gap-2">
            <p>Have an Account? </p>
            <a href="/login" className="text-MainBlue">
              Sign in
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className="grid grid-cols-2 grid-rows-4 justify-center gap-4">
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
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="birthdayDate"
              render={({ field }) => (
                <FormItem className="flex flex-col gap-2">
                  <FormLabel>Date of Birth</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      placeholder="Select your date of birth"
                      {...field}
                      value={field.value}
                      onChange={(e) => field.onChange(e.target.value)}
                    />
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
          </div>
          <div className="w-full">
            {loading && <Spinner />}
            <p>{message}</p>
            <Button className="w-full mt-5" type="submit">
              Create Account
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default RegularUserForm;
