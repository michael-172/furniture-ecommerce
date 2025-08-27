import { routing } from "@/i18n/routing";
import messages from "@/public/translations/en.json";
import { formats } from "@/i18n/request";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
    Formats: typeof formats;
  }
}

interface Pagination {
  page: number;
  limit: number;
  total: number;
}
