import React, { FC } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';
import { useTitle, useRequest } from 'ahooks';

import QuestionCard from '../../components/QuestionCard';
import ListSearch from '../../components/ListSearch';
// import { getQuestionListService } from '../../services/question';
import useLoadQuestionListData from '../../hooks/useLoadQuestionListData';
import styles from './common.module.scss';

const { Title } = Typography;

// const rawQuestionList = [
//   {
//     _id: 'q1',
//     title: 'question 1',
//     isPublished: false,
//     isStar: false,
//     answerCount: 5,
//     createdAt: '10/03 13:23',
//   },
//   {
//     _id: 'q2',
//     title: 'question 2',
//     isPublished: false,
//     isStar: true,
//     answerCount: 3,
//     createdAt: '11/03 13:23',
//   },
//   {
//     _id: 'q3',
//     title: 'question 3',
//     isPublished: false,
//     isStar: true,
//     answerCount: 4,
//     createdAt: '12/03 13:23',
//   },
//   {
//     _id: 'q4',
//     title: 'question 4',
//     isPublished: true,
//     isStar: true,
//     answerCount: 6,
//     createdAt: '13/03 13:23',
//   },
// ];

const List: FC = () => {
  useTitle("Eason's Questionnare - My Questionnaire");
  // const [searchParams] = useSearchParams();
  // console.log('keyword', searchParams.get('keyword'));
  // const [questionList, setQuestionList] = useState(rawQuestionList);
  // const { data = {}, loading } = useRequest(getQuestionListService);
  const { data = {}, loading } = useLoadQuestionListData();
  const { list = [], total = 0 } = data;
  // const [list, setList] = useState([]);
  // const [total, setTotal] = useState(0);
  // useEffect(() => {
  //   async function load() {
  //     const data = await getQuestionListService();
  //     const { list = [], total = 0 } = data;
  //     setList(list);
  //     setTotal(total);
  //   }
  //   load();
  // }, []);
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
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading &&
          list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q;
            return <QuestionCard key={_id} {...q} />;
          })}
      </div>
      <div className={styles.footer}>Load More ...</div>
    </div>
  );
};

export default List;
