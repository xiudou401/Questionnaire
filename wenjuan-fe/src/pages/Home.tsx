import React, { FC, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { MANAGE_INDEX_PATHNAME } from '../router';
// import '../_mock/index.ts';
// import axios from 'axios';
import styles from './Home.module.scss';

const { Title, Paragraph } = Typography;

const Home: FC = () => {
  const nav = useNavigate();
  //   const clickHandler = () => {
  //     // nav('/login');
  //     // nav('/login?b=20');
  //     nav({
  //       pathname: '/login',
  //       search: 'b=21',
  //     });
  //   };
  // useEffect(() => {
  // fetch('/api/test')
  //   .then((res) => res.json())
  //   .then((data) => console.log('fetch data', data));
  //   axios
  //     .get('/api/test')
  //     .then((res) => console.log('axios res data', res.data));
  // }, []);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title>Questionnaire | Online Voting</Title>
        <Paragraph>
          Has created 100 Questionnaires, published 90 of them, and received 980
          answers
        </Paragraph>
        <div>
          <Button type="primary" onClick={() => nav(MANAGE_INDEX_PATHNAME)}>
            Begin
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
