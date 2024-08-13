import { PasswordResetSchema } from "../../schemas/PasswordResetSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import PasswordRequest from "./PasswordRequest";
import { Form } from "../ui/form";
import useForgotPasswordStore from "../../store/useForgotPasswordStore";
import Spinner from "../spinner/Spinner";

const ForgotPassword = () => {
  const form = useForm<z.infer<typeof PasswordResetSchema>>({
    resolver: zodResolver(PasswordResetSchema),
    defaultValues: {
      email: "",
    },
  });

  const { data, status, loading, fetchSendEmail } = useForgotPasswordStore(
    (state) => ({
      data: state.data,
      status: state.status,
      loading: state.loading,
      fetchSendEmail: state.fetchSendEmail,
    })
  );

  const onSubmit = (values: z.infer<typeof PasswordResetSchema>) => {
    fetchSendEmail(values.email);
  };

  console.log("data", data);
  console.log("status", status);

  return (
    <Form {...form}>
      <form
        className="font-Inter text-gray-700 rounded-xl w-1/2 min-h-[480px] py-14 px-24 bg-white flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <PasswordRequest form={form} />
        {loading && <Spinner />}
        {status === "success" && <p className="text-green-600">{data}</p>}
        {status === "failure" && <p className="text-red-600">{data}</p>}
      </form>
    </Form>
  );
};

export default ForgotPassword;
