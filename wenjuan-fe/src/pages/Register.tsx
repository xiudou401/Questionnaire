import React, { FC } from 'react';
import { Typography, Space, Form, Input, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { LOGIN_PATHNAME } from '../router';
import styles from './Register.module.scss';
const { Title } = Typography;

const Register: FC = () => {
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <div className={styles.container}>
      <div>
        <Space>
          <Title level={2}>
            <UserOutlined />
          </Title>
          <Title level={2}>Create your account</Title>
        </Space>
      </div>
      <div>
        <Form
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
        >
          <Form.Item
            label="username"
            name="username"
            rules={[
              { required: true, message: 'Please enter your username' },
              {
                type: 'string',
                min: 5,
                max: 20,
                message: '5 to 20 characters',
              },
              {
                pattern: /^\w+$/,
                message: 'characters should be letter, number, or _',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="password"
            name="password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="confirm password"
            name="confirm-password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please enter your password' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  } else {
                    return Promise.reject(
                      new Error('passwords are not the same')
                    );
                  }
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="nickname" name="nickname">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
              <Link to={LOGIN_PATHNAME}>Already got an account? Log in</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
