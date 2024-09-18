import { IArticleProps } from '@/entities/articles/model/article-props.interface';
import { create } from 'zustand';

interface ArticleStore {
  articles: IArticleProps[];
}

interface ArticleStoreActions {
  setArticles: (newArticles: IArticleProps[]) => void;
  addArticle: (article: IArticleProps) => void; // Для добавления одной статьи
}

export const useArticleStore = create<ArticleStore & ArticleStoreActions>()(
  (set) => ({
    articles: [],
    setArticles: (newArticles: IArticleProps[]) => set({ articles: newArticles }),
    addArticle: (article: IArticleProps) =>
      set((state) => ({
        articles: [...state.articles, article], // Добавляем новую статью к существующему массиву
      })),
  })
);
