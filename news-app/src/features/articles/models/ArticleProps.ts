import type { Article } from './Article'

export interface ArticleProps {
  clickable: boolean;
  onClick: () => void;
  article: Article;
}
