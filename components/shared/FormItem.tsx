"use client";
import React from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { RegisterFormValues } from "@/types/auth";
import { ControllerRenderProps } from "react-hook-form";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { useLocale } from "next-intl";

const MainFormItem = ({
  field,
  placeholder,
  inputDesc,
  label,
  type,
}: {
  field: ControllerRenderProps<RegisterFormValues, keyof RegisterFormValues>;
  placeholder?: string;
  inputDesc?: string;
  label?: string | React.ReactNode;
  type:
    | "text"
    | "email"
    | "password"
    | "select"
    | "date"
    | "number"
    | "checkbox";
}) => {
  const locale = useLocale();
  switch (type) {
    case "text":
    case "number":
    case "email":
    case "password":
      return (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              type={type}
              placeholder={placeholder}
              {...field}
              name={String(field.name)}
              hideFocus
              onPaste={(e) => {
                if (type == "password") {
                  e.preventDefault();
                }
              }}
              className={`rounded-none border-0 border-b-2 !shadow-none  px-0 !bg-transparent border-[#E8ECEF]
                placeholder:text-base placeholder:font-normal ${
                  locale == "en"
                    ? "placeholder:font-inter"
                    : "placeholder:font-cairo"
                }
                `}
            />
          </FormControl>
          {inputDesc && <FormDescription>{inputDesc}</FormDescription>}
          <FormMessage />
        </FormItem>
      );

    case "checkbox":
      return (
        <FormItem>
          <FormControl>
            <div className="flex items-center gap-3">
              <Checkbox
                id="terms"
                checked={field.value}
                onCheckedChange={field.onChange}
                name={String(field.name)}
              />
              <Label htmlFor="terms">{label}</Label>
            </div>
          </FormControl>
          {inputDesc && <FormDescription>{inputDesc}</FormDescription>}
          <FormMessage />
        </FormItem>
      );

    default:
      break;
  }
};

export default MainFormItem;
