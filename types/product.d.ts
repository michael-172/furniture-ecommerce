type ProductState = {
  viewMode: "grid" | "list" | "compact" | "detailed";
  setViewMode: (viewMode: "grid" | "list" | "compact" | "detailed") => void;
  product: Product | null;
  setProduct: (product: Product) => void;
  filters: ProductFilters;
  setFilters: (filters: Partial<ProductFilters>) => void;
};

type ProductFilters = {
  categoryId: string | null;
  minPrice: number | null;
  maxPrice: number | null;
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
