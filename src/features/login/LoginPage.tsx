import { useState } from 'react';

import { Alert, Button, Checkbox, Form, FormProps, Input, Typography } from 'antd';

import './styles.scss';

import { ACCESS_TOKEN_KEY } from '@/constants/token.constant';
import token from '@/lib/token';
import { ErrorResponse } from '@/models/query.models';
import { useLoginUserMutation } from '@/queries/users.query';

type FieldType = {
  username: string;
  password: string;
  remember?: string;
};

export default function LoginPage() {
  const loginMutation = useLoginUserMutation();
  const [error, setError] = useState('');

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    loginMutation.mutate(
      {
        username: values.username,
        password: values.password,
      },
      {
        onSuccess: ({ data }) => {
          token.setToken(ACCESS_TOKEN_KEY, data.token);
          window.location.reload();
        },
        onError: (err) => {
          setError((err as unknown as ErrorResponse).response.data.message);
        },
      },
    );
  };

  return (
    <div className="login_container">
      <Typography.Title level={3}>Sign in your account</Typography.Title>
      {error && <Alert type="error" message={error} />}
      <Form layout="vertical" className="login_button" onFinish={onFinish}>
        <Form.Item<FieldType>
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="username" />
        </Form.Item>
        <Form.Item<FieldType>
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="enter your password" />
        </Form.Item>
        <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit" className="login_button">
            Sign In
          </Button>
        </Form.Item>
      </Form>
      <Button type="text">Forgot password?</Button>
      <Button type="text">Don&apos;t have an account? Sign up</Button>
    </div>
  );
}
