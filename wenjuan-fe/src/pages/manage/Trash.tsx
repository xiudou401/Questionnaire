import React, { FC, useState } from 'react';
import { useTitle } from 'ahooks';
import { Empty, Typography, Table, Tag, Button, Space, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import ListSearch from '../../components/ListSearch';
import styles from './common.module.scss';

const { Title } = Typography;
const { confirm } = Modal;

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
    isPublished: true,
    isStar: true,
    answerCount: 4,
    createdAt: '12/03 13:23',
  },
];

const Trash: FC = () => {
  useTitle("Eason's Questionnaire - Bin");
  const [questionList, setQuestionList] = useState(rawQuestionList);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const tableColumns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Is Published ?',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">Published</Tag>
        ) : (
          <Tag>Not Published</Tag>
        );
      },
    },
    {
      title: 'Answer Count',
      dataIndex: 'answerCount',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
    },
  ];

  const del = () => {
    confirm({
      title: 'Are you sure to delete it',
      icon: <ExclamationCircleOutlined />,
      content: 'You cannot get it back again once it is deleted',
      onOk: () => alert(JSON.stringify(selectedIds)),
    });
  };

  const tableElem = (
    <>
      <div style={{ marginBottom: '16px' }}>
        <Space>
          <Button type="primary" disabled={selectedIds.length === 0}>
            Put Back
          </Button>
          <Button danger disabled={selectedIds.length === 0} onClick={del}>
            Delete immediately
          </Button>
        </Space>
      </div>
      <Table
        dataSource={questionList}
        columns={tableColumns}
        pagination={false}
        rowKey={(q) => q._id}
        rowSelection={{
          type: 'checkbox',
          onChange: (selectedRowKeys) => {
            console.log(selectedRowKeys);
            setSelectedIds(selectedRowKeys as string[]);
          },
        }}
      />
    </>
  );
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>Bin</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="No Data" />}
        {questionList.length > 0 && tableElem}
      </div>
    </div>
  );
};

export default Trash;
