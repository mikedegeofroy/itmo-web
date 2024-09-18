import { IArticleProps } from '@/entities/articles/model/types';
import { NavIdProps } from '@vkontakte/vkui';

export interface IArticlePageProps extends NavIdProps {
  id: string;
  article: IArticleProps;
}
