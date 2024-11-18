import React, { FC } from 'react';
import styles from './QuestionCard.module.scss';
import { spawn } from 'child_process';

type PropsType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, createdAt, answerCount, isPublished } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="">{title}</a>
        </div>
        <div className={styles.right}>
          {isPublished ? (
            <span style={{ color: 'green' }}>Published</span>
          ) : (
            <span>Not Published</span>
          )}
          &nbsp;
          <span>Answer:{answerCount}</span>
          &nbsp;
          <span>{createdAt}</span>
        </div>
      </div>
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>Edit QuestionList</button>
          <button>Data</button>
        </div>
        <div className={styles.right}>
          <button>Star</button>
          <button>Copy</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
