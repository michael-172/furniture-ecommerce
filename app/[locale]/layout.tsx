import type { Metadata } from "next";
import { Cairo, Inter, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import ClientProviders from "./ClientProviders";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
const space_grotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Decoria",
  description:
    "Decoria is a modern furniture and home décor e-commerce platform that blends elegance, comfort, and functionality. Designed for style-conscious customers in Egypt, Decoria offers a curated selection of premium sofas, chairs, tables, lighting, and home accessories — all inspired by contemporary design trends. With an easy-to-use interface, secure payment options, and fast delivery, Decoria makes it simple to style your dream home.",
  keywords: [
    "decoria",
    "furniture egypt",
    "home decor egypt",
    "modern furniture",
    "luxury furniture",
    "buy furniture online egypt",
    "sofas egypt",
    "dining tables egypt",
    "interior design",
    "contemporary furniture",
  ],
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${poppins.variable} ${cairo.variable} ${
          space_grotesk.variable
        } ${inter.variable} 
        ${locale === "ar" ? "font-cairo" : "font-poppins"}
        antialiased`}
      >
        <ClientProviders locale={locale}>{children}</ClientProviders>
      </body>
    </html>
  );
}
