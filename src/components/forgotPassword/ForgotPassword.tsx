import { PasswordResetSchema } from "../../schemas/PasswordResetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PasswordRequest from "./PasswordRequest";
import { Form } from "../ui/form";
import ConfirmEmail from "./ConfirmEmail";
import SetPassword from "./SetPassword";

const ForgotPassword = () => {
  const [forgotState, setForgotState] = useState(1);
  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      email: "",
      code: "",
      password: "",
      confirmPassword: "",
    },
  });

  const validateEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    const result = await form.trigger("email");
    if (result) {
      setForgotState(2);
      form.clearErrors();
    }
  };

  const validateCode = async (e: React.MouseEvent) => {
    e.preventDefault();
    const result = await form.trigger("code");
    if (result) {
      console.log(form.getValues());
      setForgotState(3);
      form.clearErrors();
    }
  };

  const validatePasswords = async (e: React.MouseEvent) => {
    e.preventDefault();
    const result = await form.trigger(["password", "confirmPassword"]);
    if (result) {
      console.log(form.getValues());
      form.clearErrors();
    }
  };

  return (
    <Form {...form}>
      <form className="font-Inter text-gray-700 rounded-xl w-1/2 h-[64vh] py-14 px-24 bg-white flex flex-col gap-8">
        {forgotState === 1 && (
          <PasswordRequest form={form} validateEmail={validateEmail} />
        )}
        {forgotState === 2 && (
          <ConfirmEmail form={form} validateCode={validateCode} />
        )}
        {forgotState === 3 && (
          <SetPassword form={form} validatePasswords={validatePasswords} />
        )}
      </form>
    </Form>
  );
};

export default ForgotPassword;
