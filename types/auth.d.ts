import { registerSchema } from "@/lib/validations/register.validations";

type RegisterFormValues = z.infer<typeof registerSchema>;
