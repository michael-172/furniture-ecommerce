import { useTranslations } from "next-intl";
import * as y from "yup";

export const LoginSchema = () => {
  const t = useTranslations("Auth");
  return y.object().shape({
    email: y
      .string()
      .email(t("emailNotValid"))
      .required(`${t("emailPlaceholder")}`)
      .min(5, t("emailTooShort")),
    password: y
      .string()
      .required(`${t("passwordPlaceholder")}`)
      .min(8, t("passwordTooShort")),
  });
};
