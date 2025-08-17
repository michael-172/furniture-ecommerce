import ArticleCard from "@/components/shared/ArticleCard";
import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";

//Array of 3 articles name, image, id
const articles = [
  {
    id: 1,
    name: "7 ways to decor your home",
    image: "/images/dummy/article1.png",
  },
  {
    id: 2,
    name: "10 tips for a cozy living room",
    image: "/images/dummy/article2.png",
  },
  {
    id: 3,
    name: "5 ways to maximize small spaces",
    image: "/images/dummy/article3.png",
  },
];

const Articles = () => {
  return (
    <div className="h-fit w-full lg:h-[657px] py-10 lg:py-20 flex flex-col gap-10">
      <SectionHeader title="Latest Articles" subtitle="More articles" />

      <div className="grid justify-center justify-items-center items-center w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Articles;
