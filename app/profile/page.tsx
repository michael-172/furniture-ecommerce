// components/features/UserProfile.tsx
"use client";

import { useAxiosFetch } from "@/hooks/useAxiosFetch";

interface User {
  id: number;
  name: string;
}

export default function UserProfile() {
  const { data, loading, error } = useAxiosFetch<User>("/users/me");

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div>Hello, {data?.name}!</div>;
}
