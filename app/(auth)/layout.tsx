import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decoria - Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
