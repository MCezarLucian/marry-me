import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { Form } from "../ui/form";
import { RegisterFormSchema } from "../../schemas/RegisterFormSchema";
import RegisterStepOne from "./registerStepOne";
import RegisterStepTwo from "./registerStepTwo";
import RegisterStepThree from "./registerStepThree";
import RegisterStepFour from "./registerStepFour";
import RegisterStepFive from "./registerStepFive";
import { useEffect, useState } from "react";
import { SignupMapType } from "../../lib/types";
import useSignUpStore from "../../store/useSignupStore";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const { status, message, fetchSignUp, loading } = useSignUpStore((state) => ({
    loading: state.loading,
    status: state.status,
    message: state.message,
    fetchSignUp: state.fetchSignUp,
  }));
  const navigate = useNavigate();
  const [formState, setFormState] = useState(1);
  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      gender: "",
      birthdayDate: "",
      attributes: "",
      soulmateAttributes: "",
      password: "",
      confirmPassword: "",
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
    const fetchData: SignupMapType = {
      role_type: "Contestant",
      full_name: `${values.firstName} ${values.lastName}`,
      email: values.email,
      phone_number: values.phoneNumber,
      gender: values.gender,
      date_of_birth: format(values.birthdayDate, "yyyy-MM-dd"),
      description: values.description,
      personal_attributes: values.attributes.split(","),
      searched_attributes: values.soulmateAttributes.split(","),
      password: values.password,
    };

    // console.log(fetchData);
    fetchSignUp(fetchData);
  }

  useEffect(() => {
    const firstErrorField = Object.keys(form.formState.errors)[0];
    errorState(firstErrorField);
    function errorState(field: string) {
      if (field && form.formState.isSubmitted) {
        switch (field) {
          case "firstName":
            setFormState(1);
            break;
          case "lastName":
            setFormState(1);
            break;
          case "email":
            setFormState(1);
            break;
          case "phoneNumber":
            setFormState(2);
            break;
          case "gender":
            setFormState(2);
            break;
          case "birthdayDate":
            setFormState(2);
            break;
          case "description":
            setFormState(3);
            break;
          case "attributes":
            setFormState(4);
            break;
          case "soulmateAttributes":
            setFormState(5);
            break;
          case "password":
            setFormState(4);
            break;
          case "confirmPassword":
            setFormState(4);
            break;
          default:
            break;
        }
      }
    }
    if (status === "success") {
      navigate("/");
    }
  }, [form.formState.errors, form.formState.isSubmitted]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" font-Inter text-gray-700 rounded-xl w-1/2 h-[72vh] py-14 px-24 bg-white flex flex-col gap-4"
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
            message={message ? message : ""}
            loading={loading}
          />
        )}
        {/* <Button type="submit">Submit</Button> */}
      </form>
    </Form>
  );
};

export default RegisterForm;
