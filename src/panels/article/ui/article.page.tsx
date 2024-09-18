import { FC, useEffect, useState } from 'react';
import { Card, Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import styles from './article.module.css';
import {
  Icon20Bookmark,
  Icon20BookmarkOutline,
  Icon20LogoVk,
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { useArticleStore } from '@/shared/stores/article.store';
import { IArticleProps } from '@/entities/articles/model/types';

export interface IArticlePageProps {
  id: string;
}

export const Article: FC<IArticlePageProps> = () => {
  const router = useRouteNavigator();
  const [saved, setSaved] = useState(false);
  const params = useParams<'id'>();

  const [article, setArticle] = useState<IArticleProps | null>(null);
  const { articles } = useArticleStore();

  useEffect(() => {
    if (params?.id !== null)
      setArticle(
        articles.find((x) => x.content_id === parseInt(params?.id ?? '')) ??
          null
      );
  }, [params, articles]);

  const share = () => {
    bridge
      .send('VKWebAppShowStoryBox', {
        background_type: 'image',
        url: 'https://sun9-65.userapi.com/c850136/v850136098/1b77eb/0YK6suXkY24.jpg',
        attachment: {
          text: 'book',
          type: 'photo',
          owner_id: 743784474,
          id: 12345678,
        },
      })
      .then((data) => {
        console.log(data);
        // if (data.code_data) {
        //   // Редактор историй открыт
        //   console.log(data);
        // }
      })
      .catch((error) => {
        // Ошибка
        console.log(error);
      });
  };

  return (
    <Panel id={params?.id}>
      <PanelHeader
        before={
          <PanelHeaderBack onClick={() => router.back()}></PanelHeaderBack>
        }
      ></PanelHeader>
      <div style={{ margin: '12px', marginTop: '48px' }}>
        <h1 className={styles['title']}>{article?.title}</h1>
        <Card className={styles['header-card']}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <span>{article?.author}</span>
            <span>{article?.datetime.toDateString()}</span>
          </div>
          <div style={{ display: 'flex' }}>
            <div onClick={share} className={styles['lower-icon']}>
              <Icon20LogoVk />
            </div>
            <div
              className={styles['lower-icon']}
              onClick={() => setSaved(!saved)}
            >
              {saved ? <Icon20BookmarkOutline /> : <Icon20Bookmark />}
            </div>
          </div>
        </Card>
      </div>
      <div
        style={{
          marginTop: '100px',
          position: 'relative',
          paddingTop: '50px',
          overflow: 'hidden',
          flexGrow: 1,
        }}
      >
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
            zIndex: 10,
          }}
        />
      </div>
    </Panel>
  );
};
