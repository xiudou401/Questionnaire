import React, { FC } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, Space, Divider, Tag, Popconfirm, Modal, message } from 'antd';
import Icon, {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import styles from './QuestionCard.module.scss';

const { confirm } = Modal;

type PropsType = {
  _id: string;
  title: string;
  isPublished: boolean;
  isStar: boolean;
  answerCount: number;
  createdAt: string;
};

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { _id, title, createdAt, answerCount, isPublished, isStar } = props;
  const nav = useNavigate();

  function duplicate() {
    // alert('copy');
    message.info('copy');
  }

  function del() {
    confirm({
      title: 'are you sure?',
      icon: <ExclamationCircleOutlined />,
      onOk: () => message.success('deleted'),
    });
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>
        <div className={styles.right}>
          <Space>
            {isPublished ? (
              <Tag color="processing">Published</Tag>
            ) : (
              <Tag>Not Published</Tag>
            )}
            <span>Answer:{answerCount}</span>

            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <Divider style={{ margin: '12px 0' }} />
      <div className={styles['button-container']}>
        <div className={styles.left}>
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/edit/${_id}`)}
            >
              Edit QuestionList
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={() => nav(`/question/stat/${_id}`)}
              disabled={!isPublished}
            >
              Stats
            </Button>
          </Space>
        </div>
        <div className={styles.right}>
          <Space>
            <Button type="text" size="small" icon={<StarOutlined />}>
              {isStar ? 'Star' : 'Not Star'}
            </Button>
            <Popconfirm
              title="Are you sure to copy this?"
              okText="Yes"
              cancelText="Cancel"
              onConfirm={duplicate}
            >
              <Button type="text" size="small" icon={<CopyOutlined />}>
                Copy
              </Button>
            </Popconfirm>

            <Button
              type="text"
              size="small"
              icon={<DeleteOutlined />}
              onClick={del}
            >
              Delete
            </Button>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
