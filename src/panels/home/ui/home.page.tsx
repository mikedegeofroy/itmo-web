import { FC, useEffect } from 'react';
import { Panel, Group, NavIdProps, CardGrid } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { ArticleCard } from '@/entities/articles/ui/article';

import styles from './home.module.css';
import { Banner } from '@/entities/banner/ui/banner';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { getStoryDetails, getTopStories } from '@/shared/api/hackerNews';
import { useArticleStore } from '@/shared/stores/article.store';
import { IArticleProps } from '@/entities/articles/model/types';

export interface IHomeProps extends NavIdProps {
  id: string;
  fetchedUser?: UserInfo;
}

export const Home: FC<IHomeProps> = ({ id, fetchedUser }) => {
  const { photo_200 } = { ...fetchedUser };
  const router = useRouteNavigator();

  const { articles, addArticle } = useArticleStore();

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const ids = await getTopStories();

        ids.slice(0, 30).forEach((id, index) => {
          getStoryDetails(id).then((article) => {
            const newArticle: IArticleProps = {
              content_id: article.id,
              title: article.title,
              author: article.by,
              score: article.score,
              datetime: new Date(article.time * 1000),
              new: index < 3,
              text: article.text || '',
            };

            addArticle(newArticle);
          });
        });
      } catch (error) {
        console.error('Ошибка при загрузке историй:', error);
      }
    };

    fetchStories(); // Вызываем функцию внутри useEffect
  }, []);

  return (
    <Panel id={id}>
      <div style={{ padding: '20px', paddingTop: '40px' }}>
        <h1 className={styles['title']}>Hello 👋</h1>
      </div>
      <Banner avatar={photo_200} onClick={() => router.push('user')} />
      <Group>
        <CardGrid size='l'>
          {articles.map((article, key) => (
            <ArticleCard
              {...article}
              onClick={() => router.push(`/article/${article.content_id}`)}
              key={key}
            />
          ))}
        </CardGrid>
      </Group>
    </Panel>
  );
};
