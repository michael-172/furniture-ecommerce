"use client";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import en from "@/public/translations/en.json";
import ar from "@/public/translations/ar.json";
import { Toaster } from "sonner";
import { CheckCircleIcon, ClosedCaption } from "lucide-react";

const messagesMap = { en, ar } as const;

const ClientProviders = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: "ar" | "en";
}) => {
  const messages = messagesMap[locale];

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <Toaster
        position="top-center"
        closeButton
        icons={{ success: <CheckCircleIcon />, error: <ClosedCaption /> }}
      />
      {children}
    </NextIntlClientProvider>
  );
};

export default ClientProviders;
