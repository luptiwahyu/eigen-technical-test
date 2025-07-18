export interface Article {
  title: string;
  description: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
  url: string;
  author?: string;
  source?: {
    name?: string;
  };
}
