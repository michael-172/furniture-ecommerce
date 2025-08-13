import React from "react";
import CategoryCard from "../CategoryCard";

const Categories = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <CategoryCard
          title="Living Room"
          type="full"
          image="/images/dummy/furnituire-dummy (2).svg"
        />
      </div>
      <div className="grid grid-cols-1 gap-6">
        <CategoryCard
          title="Bedroom"
          type="half"
          image="/images/dummy/furnituire-dummy (1).svg"
        />
        <CategoryCard
          title="Office"
          type="half"
          image="/images/dummy/furnituire-dummy (3).svg"
        />
      </div>
    </div>
  );
};

export default Categories;
