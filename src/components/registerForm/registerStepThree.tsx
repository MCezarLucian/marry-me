import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RegisterFormType } from "@/lib/types";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface RegisterStepOneProps {
  form: RegisterFormType;
  handlePrev: (e: React.MouseEvent) => void;
  handleNext: (e: React.MouseEvent) => void;
}

const RegisterStepThree = ({
  form,
  handleNext,
  handlePrev,
}: RegisterStepOneProps) => {
  return (
    <div className="h-[80%] w-full flex justify-between flex-col gap-12">
      <FormField
        control={form.control}
        name="description"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Description</FormLabel>
            <FormControl>
              <Textarea
                className="h-full"
                placeholder="Enter description"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex justify-between w-full">
        <Button className="w-1/3" onClick={handlePrev}>
          Prev
        </Button>
        <Button className="w-1/3" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default RegisterStepThree;
