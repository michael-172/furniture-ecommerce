type CategoriesResponse = {
  status: string;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
  data: { name: string; id: number }[];
};
