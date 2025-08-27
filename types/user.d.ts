type UserState = {
  userId: string | null;
  user: LoggedInUser | null;
  isAuthenticated: boolean;
  login: (userId: string, user: LoggedInUser) => void;
  logout: () => void;
};

type LoggedInUser = {
  _id: string;
  email: string;
  name: string;
  role: string;
  passwordChangeAt: string;
  __v: number;
  // Add any other user properties you need
};

type MyCartResponse = {
  data: Cart;
  status: string;
  message: string;
  pagination?: Pagination;
};

type Cart = {
  id: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  cart_items: CartItem[];
};

type CartItem = {
  id: string;
  quantity: number;
  product: Product;
  variant: Variant;
};
