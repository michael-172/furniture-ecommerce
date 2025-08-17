type ProductState = {
  viewMode: "grid" | "list" | "compact" | "detailed";
  setViewMode: (viewMode: "grid" | "list" | "compact" | "detailed") => void;
  product: Product | null;
  setProduct: (product: Product) => void;
  filters: ProductFilters;
  setFilters: (filters: Partial<ProductFilters>) => void;
};

type ProductFilters = {
  categoryId: string | undefined;
  minPrice: number | undefined;
  maxPrice: number | undefined;
  sortBy: string | undefined;
};

type ProductsResponse = {
  data: Product[];
  pagination: {
    page: number;
    limit: number;
    results: number;
    total_pages: number;
  };
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
