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

interface RegisterStepFourProps {
  form: RegisterFormType;
  handlePrev: (e: React.MouseEvent) => void;
  handleNext: (e: React.MouseEvent) => void;
}

const options = [
  { label: "Honestly", value: "honestly" },
  { label: "Loyalty", value: "loyalty" },
];

const RegisterStepFour = ({
  form,
  handleNext,
  handlePrev,
}: RegisterStepFourProps) => {
  const [value, setValue] = useState<string[]>([]);

  useEffect(() => {
    form.setValue("attributes", value.toString());
  }, [value, form]);

  return (
    <div className="h-[80%] w-full flex justify-between flex-col">
      <FormField
        control={form.control}
        name="attributes"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Attributes</FormLabel>
            <FormControl>
              <MultiSelector
                values={value}
                onValuesChange={setValue}
                loop={false}
              >
                <MultiSelectorTrigger>
                  <MultiSelectorInput placeholder="Select your attributes" />
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
        <Button className="w-1/3" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default RegisterStepFour;
