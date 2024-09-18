import { Avatar, classNames } from '@vkontakte/vkui';
import { FC } from 'react';

import styles from './banner.module.css';

export interface IBannerProps {
  avatar: string | undefined;
  onClick: () => void;
}

export const Banner: FC<IBannerProps> = ({ avatar, ...props }) => {
  return (
    <div {...props} className={styles['banner_container']}>
      <Avatar
        style={{
          height: '120px',
          width: '120px',
          position: 'absolute',
          right: '12px',
          top: '0',
          zIndex: 20,
        }}
        src={avatar}
      />
      <h1
        className={classNames(
          styles['header_banner'],
          styles['header_scroll_left']
        )}
      >
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
      </h1>
      <h1
        className={classNames(
          styles['header_banner'],
          styles['header_scroll_right']
        )}
      >
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
        Hacker News Hacker News Hacker News Hacker News Hacker News Hacker News
      </h1>
    </div>
  );
};
