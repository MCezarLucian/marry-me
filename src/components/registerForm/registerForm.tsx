import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "../ui/form";
import { RegisterFormSchema } from "../../schemas/RegisterFormSchema";
import RegisterStepOne from "./registerStepOne";
import RegisterStepTwo from "./registerStepTwo";
import RegisterStepThree from "./registerStepThree";
import RegisterStepFour from "./registerStepFour";
import RegisterStepFive from "./registerStepFive";
import { useState } from "react";

const RegisterForm = () => {
  const [formState, setFormState] = useState(1);
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      birthdayDate: undefined,
      attributes: "",
      soulmateAttributes: "",
    },
  });

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormState(formState - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormState(formState + 1);
  };

  function onSubmit(values: z.infer<typeof RegisterFormSchema>) {
    const formData = {
      ...values,
      attributes: values.attributes.split(","),
      soulmateAttributes: values.soulmateAttributes.split(","),
    };
    console.log(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" font-Inter text-gray-700 rounded-xl w-1/2 h-[64vh] py-14 px-24 bg-white"
      >
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <h1 className="text-4xl font-bold text-black">Create an Account</h1>
          <div className="flex flex-row gap-2">
            <p>Have an Account? </p>
            <a href="/" className="text-MainBlue">
              {" "}
              Sign in
            </a>
          </div>
        </div>
        {formState === 1 && (
          <RegisterStepOne handleNext={handleNext} form={form} />
        )}
        {formState === 2 && (
          <RegisterStepTwo
            handleNext={handleNext}
            handlePrev={handlePrev}
            form={form}
          />
        )}
        {formState === 3 && (
          <RegisterStepThree
            form={form}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {formState === 4 && (
          <RegisterStepFour
            form={form}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
        {formState === 5 && (
          <RegisterStepFive
            form={form}
            handlePrev={handlePrev}
            handleSubmit={onSubmit}
          />
        )}
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
};

export default RegisterForm;
