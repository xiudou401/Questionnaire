import React, { FC, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Typography, Space, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { REGISTER_PATHNAME } from '../router';
import styles from './Login.module.scss';

const { Title } = Typography;

const USERNAME_KEY = 'USERNAME';
const PASSWORD_KEY = 'PASSWORD';

function rememberUser(username: string, password: string) {
  localStorage.setItem(USERNAME_KEY, username);
  localStorage.setItem(PASSWORD_KEY, password);
}

function deleteUserFromStorage() {
  localStorage.removeItem(USERNAME_KEY);
  localStorage.removeItem(PASSWORD_KEY);
}

function getUserInfoFromStorage() {
  return {
    username: localStorage.getItem(USERNAME_KEY),
    password: localStorage.getItem(PASSWORD_KEY),
  };
}

const Login: FC = () => {
  // const nav = useNavigate();

  const [form] = Form.useForm();

  useEffect(() => {
    const { username, password } = getUserInfoFromStorage();
    form.setFieldsValue({ username, password });
  }, []);
  const onFinish = (values: any) => {
    console.log(values);
    const { username, password, remember } = values || {};
    if (remember) {
      rememberUser(username, password);
    } else {
      deleteUserFromStorage();
    }
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
          initialValues={{ remember: true }}
          form={form}
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
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 10, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Link to={REGISTER_PATHNAME}>Register</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
