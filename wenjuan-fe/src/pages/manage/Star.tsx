import React, { FC, useState } from 'react';
import { Typography, Empty } from 'antd';
import { useTitle } from 'ahooks';
import ListSearch from '../../components/ListSearch';

import QuestionCard from '../../components/QuestionCard';
import styles from './common.module.scss';

const { Title } = Typography;

const rawQuestionList = [
  {
    _id: 'q1',
    title: 'question 1',
    isPublished: false,
    isStar: true,
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
];

const Star: FC = () => {
  useTitle("Eason's Questionnaire - Stared Questionnaire");
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Stared Questionnaire</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="No Data" />}
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>next page</div>
    </>
  );
};

export default Star;
