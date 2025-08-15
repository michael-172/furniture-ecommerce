"use client";
import { NextIntlClientProvider } from "next-intl";
import React from "react";
import en from "@/public/translations/en.json";
import ar from "@/public/translations/ar.json";
import { Toaster } from "sonner";
import { CheckCircleIcon, ClosedCaption } from "lucide-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const messagesMap = { en, ar } as const;
const queryClient = new QueryClient();
const ClientProviders = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: "ar" | "en";
}) => {
  const messages = messagesMap[locale];

  return (
    <QueryClientProvider client={queryClient}>
      <NextIntlClientProvider messages={messages} locale={locale}>
        <Toaster position="top-center" closeButton />
        {children}
      </NextIntlClientProvider>
    </QueryClientProvider>
  );
};

export default ClientProviders;
