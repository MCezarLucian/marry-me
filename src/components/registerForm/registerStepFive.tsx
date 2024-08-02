import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RegisterFormType } from "@/lib/types";
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger,
} from "../ui/multiSelect";
import { Button } from "../ui/button";

interface RegisterStepFiveProps {
  form: RegisterFormType;
  handlePrev: (e: React.MouseEvent) => void;
  handleSubmit: (values: {
    soulmateAttributes: string;
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    gender: string;
    birthdayDate: Date;
    description: string;
    attributes: string;
  }) => void;
}

const options = [
  { label: "Honestly", value: "honestly" },
  { label: "Loyalty", value: "loyalty" },
];

const RegisterStepFive = ({
  form,
  handlePrev,
  handleSubmit,
}: RegisterStepFiveProps) => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    form.setValue("soulmateAttributes", value.toString());
  }, [value, form]);

  return (
    <div className="h-[80%] w-full flex justify-between flex-col">
      <FormField
        control={form.control}
        name="soulmateAttributes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Soulmate Attributes</FormLabel>
            <FormControl>
              <MultiSelector
                values={value}
                onValuesChange={setValue}
                loop={false}
              >
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder="Select your soulmate attributes" />
                </MultiSelectorTrigger>
                <MultiSelectorContent>
                  <MultiSelectorList>
                    {options.map((option, i) => (
                      <MultiSelectorItem key={i} value={option.value}>
                        {option.label}
                      </MultiSelectorItem>
                    ))}
                  </MultiSelectorList>
                </MultiSelectorContent>
              </MultiSelector>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex justify-between w-full">
        <Button className="w-1/3" onClick={handlePrev}>
          Prev
        </Button>
        <Button className="w-1/3" onClick={() => handleSubmit}>
          Create Account
        </Button>
      </div>
    </div>
  );
};

export default RegisterStepFive;
