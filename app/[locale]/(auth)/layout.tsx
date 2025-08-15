import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Decoria - Authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left: Image Section */}
      <div className="lg:w-1/2 flex items-center justify-center">
        <Image
          width={736}
          height={1080}
          quality={100}
          src="/images/auth/auth-bg.png"
          alt="Chair"
          className="max-w-full w-full object-cover h-full"
        />
      </div>

      {/* Right: Form Section */}
      <div className="lg:w-1/2 flex items-center justify-center p-8">
        {children}
      </div>
    </div>
  );
}
