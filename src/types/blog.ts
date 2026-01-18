export type Blog = {
  id: number;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage: string;
  content: string;
};

export type CreateBlogPayload = Omit<Blog, "id">;
