type Category = {
  id: number;
  name: string;
};

export interface Article {
  id: number;
  title: string;
  content: string;
  image_url: string;
  published_at: string;
  category_id: number;
  source: string;
  external_source_url: string;
  spotlight: number;
  created_at: string;
  updated_at: string;
  category: Category;
}

export type ArticlesState = {
  articles: Article[];
  articleIdShown: number;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};
