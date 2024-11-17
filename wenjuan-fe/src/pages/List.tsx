import React, { FC, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import styles from './List.module.scss';

const rawQuestionList = [
  {
    _id: 'q1',
    title: 'question 1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '10/03 13:23',
  },
  {
    _id: 'q2',
    title: 'question 2',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createdAt: '11/03 13:23',
  },
  {
    _id: 'q3',
    title: 'question 3',
    isPublished: false,
    isStar: true,
    answerCount: 4,
    createdAt: '12/03 13:23',
  },
  {
    _id: 'q4',
    title: 'question 4',
    isPublished: true,
    isStar: true,
    answerCount: 6,
    createdAt: '13/03 13:23',
  },
];
const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>my question list</h3>
        </div>
        <div className={styles.right}>search</div>
      </div>
      <div className={styles.content}>
        {questionList.map((q) => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q} />;
        })}
      </div>
      <div className={styles.footer}>footer</div>
    </div>
  );
};

export default List;
