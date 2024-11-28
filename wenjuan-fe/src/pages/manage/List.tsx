import React, { FC, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Typography } from 'antd';
import { useTitle } from 'ahooks';

import QuestionCard from '../../components/QuestionCard';
import ListSearch from '../../components/ListSearch';
import styles from './common.module.scss';

const { Title } = Typography;

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
  useTitle("Eason's Questionnare - My Questionnaire");
  // const [searchParams] = useSearchParams();
  // console.log('keyword', searchParams.get('keyword'));
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>my question list</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length > 0 &&
          questionList.map((q) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>Load More ...</div>
    </div>
  );
};

export default List;
