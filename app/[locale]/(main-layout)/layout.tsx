import Navbar from "@/components/views/Navbar";
import NavbarAd from "@/components/views/NavbarAd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <NavbarAd />
      <Navbar />
      {children}
    </div>
  );
}
