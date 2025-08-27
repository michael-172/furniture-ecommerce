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
  id: string;
  name: string;
  price: number;
  priceAfterDiscount: number;
  description: string;
  sku: string;
  categoryId: string;
  mainImage: string;
  images: string[];
  variants: Variant[];
  createdAt: string;
  updatedAt: string;
  rating_average: number;
  rating_quantity: number;
  status: "AVAILABLE" | "OUT_OF_STOCK" | "DISCONTINUED"; // adjust as needed
};

type Variant = {
  id: string;
  productId: string;
  attributes: string;
  image: string;
  stock: number;
  price: number;
  sku: string;
};
