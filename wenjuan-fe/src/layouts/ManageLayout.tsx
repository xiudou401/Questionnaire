import React, { FC } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Button, Space, Divider } from 'antd';
import {
  PlusOutlined,
  BarsOutlined,
  StarOutlined,
  DeleteOutlined,
} from '@ant-design/icons';
import styles from './MangeLayout.module.scss';

const ManageLayout: FC = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button type="primary" size="large" icon={<PlusOutlined />}>
            Create Questionnaire
          </Button>
          <Divider style={{ borderTop: 'transparent' }} />
          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manage/list')}
          >
            My Questionnaire
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            Stared Questionnaire
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            Bin
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
};

export default ManageLayout;
