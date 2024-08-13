import { PasswordResetSchema } from "../../schemas/PasswordResetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PasswordRequest from "./PasswordRequest";
import { Form } from "../ui/form";

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof PasswordResetSchema>) => {
    //api
  };

  return (
    <Form {...form}>
      <form
        className="font-Inter text-gray-700 rounded-xl w-1/2 min-h-[480px] py-14 px-24 bg-white flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <PasswordRequest form={form} />
      </form>
    </Form>
  );
};

export default ForgotPassword;
