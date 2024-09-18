import { FC } from 'react';
import { Panel, Group, NavIdProps, CardGrid } from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { ArticleCard } from '@/entities/articles/ui/article';

import styles from './home.module.css';
import { Banner } from '@/entities/banner/ui/banner';
import { IArticleProps } from '@/entities/articles/model/types';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const articles: IArticleProps[] = [
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: true,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: true,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: false,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: false,
    content_id: 0,
  },
  {
    title:
      'Radicle is an open source, peer-to-peer code collaboration stack built on Git ',
    author: 'Mike de Geofroy',
    score: 1173,
    datetime: new Date(),
    new: false,
    content_id: 0,
  },
];

export interface IHomeProps extends NavIdProps {
  id: string;
  fetchedUser?: UserInfo;
}

export const Home: FC<IHomeProps> = ({ id, fetchedUser }) => {
  const { photo_200 } = { ...fetchedUser };
  const router = useRouteNavigator();

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
