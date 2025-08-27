import axiosClient from "@/lib/api/axiosClient";
import { useUserStore } from "@/lib/store/userStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type AuthCredentials = {
  email: string;
  password: string;
};

type SignupData = AuthCredentials & {
  name?: string;
  username?: string;
};

const loginUser = async (credentials: AuthCredentials) => {
  const { data } = await axiosClient.post("/auth/login", credentials);
  return data;
};

const signupUser = async (data: SignupData) => {
  const response = await axiosClient.post("/auth/register", data);
  return response.data;
};

export function useAuthMutations() {
  const router = useRouter();
  const { login: setLogin } = useUserStore();

  const { mutate: login, isPending: isLoggingIn } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      setLogin(data.user.id, data.data);
      document.cookie = `auth_token=${data.token}; path=/; secure; samesite=strict`;
      toast.success("Login successful");
      router.push("/");
    },
    onError: (error: unknown) => {
      toast.error((error as Error)?.message || "Login failed");
    },
  });

  const { mutate: signup, isPending: isSigningUp } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("Signup successful");
      router.push("/login");
    },
    onError: (error: unknown) => {
      toast.error((error as Error)?.message || "Signup failed");
    },
  });

  const logout = () => {
    console.log("Logging out");
    // Implement actual logout logic here if needed
  };

  return {
    login,
    isLoggingIn,
    signup,
    isSigningUp,
    logout,
  };
}
