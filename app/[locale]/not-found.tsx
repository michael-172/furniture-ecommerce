import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center">
      <Image
        src={"/images/shared/404.png"}
        alt="Not Found"
        width={600}
        height={600}
      />

      <div className="text-[color:var(--neutral-07100,#141718)] text-[40px] font-medium leading-[44px] tracking-[-0.4px]">
        The page you are looking for does not exist.
      </div>

      <Button variant="default" className="cursor-pointer mt-4">
        Go back
      </Button>
    </div>
  );
}
