type ProductState = {
  products: Product[];
  viewMode: "grid" | "list" | "compact" | "detailed";
  setProducts: (products: Product[]) => void;
  setViewMode: (viewMode: "grid" | "list" | "compact" | "detailed") => void;
};

type Product = {
  _id: string;
  name: string;
  price: number;
  priceAfterDiscount: number;
  description: string;
  sku: string;
  categoryId: string;
  mainImage: string;
  images: string[];
  colors: {
    name: string;
    image: string;
    _id: string;
    id: string;
  }[];
  createdAt: string;
  updatedAt: string;
  id: string;
  rating_average: number;
};
