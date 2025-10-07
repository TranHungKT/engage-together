import React from 'react';
import {
  DashboardOutlined,
  EditOutlined,
  GroupOutlined,
  LoginOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { MenuProps } from 'antd';
import routerMeta from './routerMeta';
import { SIGNOUT_KEY } from '@/constants/menu.constant';
type Menu = Required<MenuProps>['items'];

export const getMenu = ({ isLogin, userId }: { isLogin: boolean; userId?: string }): Menu => {
  if (!isLogin) {
    return [{ key: 'Login', label: 'Login', icon: <LoginOutlined /> }];
  }
  return [
    {
      key: 'Organization',
      label: 'Organization',
      icon: <GroupOutlined />,
      children: [
        {
          key: '/organization/dashboard/f304eec7-a54c-457c-85bf-a293f2a7f99f',
          label: 'Your Organization',
          icon: <GroupOutlined />,
        },
        {
          key: routerMeta['OrganizationRegistrationPage'].path,
          label: 'Registration',
          icon: <EditOutlined />,
        },
      ],
    },
    {
      key: 'User',
      label: 'User',
      icon: <UserOutlined />,
      children: [
        {
          key: `/user/${userId}/profile`,
          label: 'User profile',
          icon: <ProfileOutlined />,
        },
        {
          key: routerMeta['MainDashboardPage'].path,
          label: 'User dashboard',
          icon: <DashboardOutlined />,
        },
      ],
    },
    {
      key: SIGNOUT_KEY,
      label: 'Sign out',
      icon: <LogoutOutlined />,
    },
  ];
};
