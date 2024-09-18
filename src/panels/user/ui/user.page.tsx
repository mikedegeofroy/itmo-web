import {
  Avatar,
  Card,
  CardGrid,
  Group,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import { FC } from 'react';
import { ArticleCard } from '@/entities/articles/ui/article';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { IArticleProps } from '@/entities/articles/model/types';

import styles from './user.module.css';

interface IUserPageProps {
  id: string;
  fetchedUser: UserInfo | undefined;
}

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

export const UserPage: FC<IUserPageProps> = ({ id, fetchedUser }) => {
  const router = useRouteNavigator();

  return (
    <Panel id={id}>
      <PanelHeader
        before={
          <PanelHeaderBack onClick={() => router.back()}></PanelHeaderBack>
        }
      ></PanelHeader>
      <div style={{ padding: '12px' }}>
        <Card className={styles['blue-card']}>
          <Avatar></Avatar>
          <span style={{ fontWeight: 600 }}>
            {fetchedUser?.first_name ?? 'Mike de Geofroy'}
          </span>
        </Card>

        <h1 style={{ fontSize: '3em', fontWeight: 500, margin: 0 }}>Saved</h1>
      </div>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '140vw',
            height: '140vw',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 100%)',
            borderRadius: '100%',
            position: 'absolute',
            left: '50%',
            transform: 'translate(-50%)',
            top: 0,
            zIndex: 0,
          }}
        />
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
      </div>
    </Panel>
  );
};
