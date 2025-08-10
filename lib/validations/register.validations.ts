import { useTranslations } from "next-intl";
import * as y from "yup";

export const RegisterSchema = () => {
  const t = useTranslations("Auth");
  return y.object().shape({
    username: y
      .string()
      .required(`${t("usernamePlaceholder")}`)
      .min(2, t("userNameTooShort")),
    name: y
      .string()
      .required(`${t("namePlaceholder")}`)
      .min(2, t("nameTooShort")),
    email: y
      .string()
      .email(t("emailNotValid"))
      .required(`${t("emailPlaceholder")}`)
      .min(5, t("emailTooShort")),
    password: y
      .string()
      .required(`${t("passwordPlaceholder")}`)
      .min(8, t("passwordTooShort")),
    confirmPassword: y
      .string()
      .required(`${t("confirmPasswordPlaceholder")}`)
      .oneOf([y.ref("password")], `${t("confirmPasswordPlaceholder")}`),

    acceptTerms: y
      .boolean()
      .default(false)
      .required(`${t("acceptTermsRequired")}`)
      .oneOf([true], t("acceptTermsRequired")),
  });
};
