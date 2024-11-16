import React, { FC, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import styles from './List.module.scss';

const rawQuestionList = [
  {
    id: 'q1',
    title: 'question 1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '10/03 13:23',
  },
  {
    id: 'q2',
    title: 'question 2',
    isPublished: false,
    isStar: true,
    answerCount: 3,
    createAt: '11/03 13:23',
  },
  {
    id: 'q3',
    title: 'question 3',
    isPublished: false,
    isStar: true,
    answerCount: 4,
    createAt: '12/03 13:23',
  },
  {
    id: 'q4',
    title: 'question 4',
    isPublished: true,
    isStar: true,
    answerCount: 6,
    createAt: '13/03 13:23',
  },
];
const List: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);
  return (
    <div>
      <p>List</p>
    </div>
  );
};

export default List;
