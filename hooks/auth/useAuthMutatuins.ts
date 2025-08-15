import axiosClient from "@/lib/api/axiosClient";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { toast } from "sonner";

type AuthCredentials = {
  email: string;
  password: string;
};

type SignupData = AuthCredentials & {
  name?: string;
  username?: string;
};

export function useAuthMutations() {
  const router = useRouter();
  const login = useCallback(
    async (credentials: AuthCredentials) => {
      try {
        const { data } = await axiosClient.post("/auth/login", credentials);
        document.cookie = `auth_token=${data.token}; path=/; secure; samesite=strict`;
        toast.success("Login successful");
        router.push("/");
        return { success: true };
      } catch (error: unknown) {
        toast.error((error as Error)?.message || "Login failed");
        return { success: false, error: "Login failed" };
      }
    },
    [router]
  );

  const signup = useCallback(
    async (data: SignupData) => {
      try {
        const response = await axiosClient.post("/auth/register", data);
        console.log("Signing up:", response.data);
        toast.success("Signup successful");
        router.push("/login");
        return { success: true };
      } catch (error: unknown) {
        toast.error((error as Error)?.message || "Signup failed");
        console.log("Signup error:", (error as Error)?.message);
        return { success: false, error: "Signup failed" };
      }
    },
    [router]
  );

  const logout = useCallback(async () => {
    console.log("Logging out");
    return { success: true };
  }, []);

  return { login, signup, logout };
}
