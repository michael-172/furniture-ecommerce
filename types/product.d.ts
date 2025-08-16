type ProductState = {
  viewMode: "grid" | "list" | "compact" | "detailed";
  setViewMode: (viewMode: "grid" | "list" | "compact" | "detailed") => void;
};

type ProductsResponse = {
  data: Product[];
  pagination: unknown;
  message: string;
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
  rating_quantity: number;
};
