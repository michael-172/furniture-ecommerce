import axiosServer from "@/lib/api/axiosServer";
import Image from "next/image";

export type HomeItemType = "social_links" | "banner" | "logo";

export interface HomeItem {
  id: number;
  type: HomeItemType;
  image_path: string;
  platform: string | null;
  url: string | null;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
}

// Server Component
export default async function DashboardPage() {
  const { data: homeContents } = await axiosServer.get<HomeItem[]>(
    "/home-contents"
  );
  return (
    <div className="p-6">
      {homeContents.map((item) => (
        <div key={item.id} className="mb-4">
          <h2 className="text-xl font-bold">{item.type}</h2>
          <Image
            width={100}
            height={100}
            src={item.image_path}
            alt={item.type}
            className="w-4 h-auto"
          />
          <p>Platform: {item.platform}</p>
          <p>URL: {item.url}</p>
          <p>Created At: {item.created_at}</p>
          <p>Updated At: {item.updated_at}</p>
        </div>
      ))}
    </div>
  );
}
