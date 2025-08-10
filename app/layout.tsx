import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
