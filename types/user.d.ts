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
