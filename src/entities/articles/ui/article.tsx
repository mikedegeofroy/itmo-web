import { FC } from 'react';
import { IArticleProps } from '../model/types';
import { Card, CardProps } from '@vkontakte/vkui';

import styles from './article.module.css';
import {
  Icon16Fire,
  Icon20StatisticsOutline,
  Icon20UserOutline,
} from '@vkontakte/icons';

export const ArticleCard: FC<IArticleProps & CardProps> = (props) => {
  return (
    <Card {...props} className={styles['card']}>
      <div style={{ marginBottom: '30px' }} className={styles['card-row']}>
        <h1 className={styles['card-title']}>{props.title}</h1>
        {props.new && (
          <div className={styles['new-icon']}>
            <Icon16Fire />
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ paddingRight: '3px' }} className={styles['lower-icon']}>
            <Icon20UserOutline />
          </div>
          <span
            className={styles['muted-text']}
            style={{ fontWeight: 400, fontSize: '15px' }}
          >
            {props.author}
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex' }}>
            <div
              style={{ paddingRight: '3px' }}
              className={styles['lower-icon']}
            >
              <Icon20StatisticsOutline />
            </div>
            <span
              className={styles['muted-text']}
              style={{ fontWeight: 450, fontSize: '15px' }}
            >
              {props.score}
            </span>
          </div>
          <span
            className={styles['muted-text']}
            style={{ fontWeight: 450, fontSize: '15px' }}
          >
            {props.datetime.toDateString()}
          </span>
        </div>
      </div>
    </Card>
  );
};
