"use client";
import Title from "@/components/shared/Title";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import React from "react";
import * as yup from "yup";
import { Form, FormField } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import MainFormItem from "@/components/shared/FormItem";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "@/lib/validations/login.validations";
import Image from "next/image";
import { useAuthMutations } from "@/hooks/auth/useAuthMutatuins";
import { Loader2 } from "lucide-react";

const Page = () => {
  const t = useTranslations("Auth");
  const locale = useLocale();
  const { login } = useAuthMutations();

  const loginSchema = LoginSchema();
  const form = useForm<yup.InferType<typeof loginSchema>>({
    resolver: yupResolver(loginSchema),
    defaultValues: {},
    mode: "onSubmit",
  });

  async function onSubmit(values: yup.InferType<typeof loginSchema>) {
    await login(values);
  }

  console.log(form.formState.errors);

  return (
    <div className="flex flex-col w-full  max-w-md space-y-4">
      <Form {...form}>
        <div className="flex flex-col gap-6">
          <Link href="/" className="flex justify-center">
            <Image
              src="/images/shared/Logo-Transparent.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <Title
            fontSize="text-[40px]"
            fontWeight="font-medium"
            leading="leading-tight"
          >
            {t("login")}
          </Title>
          <p
            className={`text-secondary text-base font-normal leading-[26px] ${
              locale == "en" ? "font-inter" : "font-cairo"
            }`}
          >
            {t("dontHaveAccount")}
            <Link
              href="/register"
              className={
                locale == "en"
                  ? "font-inter font-semibold"
                  : "font-cairo font-semibold"
              }
            >
              <span className="text-success mx-1">{t("signup")}</span>
            </Link>
          </p>
        </div>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <MainFormItem
                type="email"
                placeholder={t("emailPlaceholder")}
                field={field}
              />
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <MainFormItem
                type="password"
                placeholder={t("passwordPlaceholder")}
                field={field}
              />
            )}
          />
          <Button
            disabled={form.formState.isSubmitting}
            className="w-full h-[48px]"
            type="submit"
          >
            {form.formState.isSubmitting ? (
              <Loader2 width={20} className="animate-spin" />
            ) : (
              t("submit")
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
