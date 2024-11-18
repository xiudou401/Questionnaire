import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MangeLayout.module.scss';

const ManageLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p> ManageLayout left</p>
        <button>Create Questionnaire</button>
        <br />
        <a href="">My Questionnaire</a>
        <br />
        <a href="">Stared Questionnaire</a>
        <br />
        <a href="">Bin</a>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
