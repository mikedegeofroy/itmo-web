import { IArticleProps } from '@/entities/articles/model/article-props.interface';
import { NavIdProps } from '@vkontakte/vkui';

export interface IArticlePageProps extends NavIdProps {
  id: string;
  article: IArticleProps;
}
