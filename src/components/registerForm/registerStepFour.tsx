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
import { Input } from "../ui/input";
import { Eye, EyeOff } from "lucide-react";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfimPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    form.setValue("attributes", value.toString());
  }, [value, form]);

  return (
    <div className="h-[80%] w-full flex justify-between flex-col gap-12">
      <div className="w-full flex gap-4 flex-col">
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
                    onClick={() => setShowConfirmPassword(!showConfimPassword)}
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
