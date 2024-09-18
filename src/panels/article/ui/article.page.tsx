import { FC, useState } from 'react';
import { IArticlePageProps } from '../model/types';
import {
  Card,
  Panel,
  PanelHeader,
  PanelHeaderBack,
} from '@vkontakte/vkui';

import styles from './article.module.css';
import {
  Icon20Bookmark,
  Icon20BookmarkOutline,
  Icon20LogoVk,
} from '@vkontakte/icons';
import bridge from '@vkontakte/vk-bridge';
import { useParams, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

export const Article: FC<IArticlePageProps> = ({ id, article }) => {
  const router = useRouteNavigator();
  const params = useParams<'id'>();

  const [saved, setSaved] = useState(false);

  console.log(params?.id);

  const share = () => {
    bridge.send('VKWebAppShare', {
      link: 'https://vk.com/app51913442_560086918',
    });
  };

  return (
    <Panel id={id}>
      <PanelHeader
        before={
          <PanelHeaderBack onClick={() => router.back()}></PanelHeaderBack>
        }
      ></PanelHeader>
      <div style={{ margin: '12px', marginTop: '48px' }}>
        <h1 className={styles['title']}>{article.title}</h1>
        <Card className={styles['header-card']}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <span>{article.author}</span>
            <span>{article.datetime.toDateString()}</span>
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
