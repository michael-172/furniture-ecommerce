"use client";
import { NextIntlClientProvider } from "next-intl";
import React from "react";

const ClientProviders = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: "ar" | "en";
}) => {
  return (
    <NextIntlClientProvider locale={locale}>{children}</NextIntlClientProvider>
  );
};

export default ClientProviders;
