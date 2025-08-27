import { useSearchParams } from "next/navigation";
import { usePathname as useI18nPathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";
import { startTransition } from "react";

export const useLanguageChange = () => {
  const locale = useLocale();
  const i18nPathname = useI18nPathname(); // Locale-free pathname from next-intl
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLanguageChange = (nextLocale: "en" | "ar") => {
    if (nextLocale === locale) return;
    startTransition(() => {
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.replace(`${i18nPathname}${`?${searchParams.toString()}`}${hash}`, {
        locale: nextLocale,
      });
    });
  };

  return { handleLanguageChange };
};
