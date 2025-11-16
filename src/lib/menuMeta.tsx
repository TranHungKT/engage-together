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
import { CurrentUserDetailsResponse } from '@/repositories/users/userRepositories.params';

export type Menu = Required<MenuProps>['items'];

export const getMenu = ({
  isLogin,
  userInfo,
}: {
  isLogin: boolean;
  userInfo: Partial<CurrentUserDetailsResponse['data']>;
}): Menu => {
  if (!isLogin) {
    return [{ key: 'authentication/login', label: 'Login', icon: <LoginOutlined /> }];
  }

  const { id: userId, organizations } = userInfo;

  const organizationList = (organizations || []).map((org): Menu[0] => ({
    key: `/${org.organizationId}/dashboard`,
    label: org.organizationName,
    icon: <GroupOutlined />,
    type: 'item',
  }));

  return [
    {
      key: 'organization',
      label: 'Organization',
      icon: <GroupOutlined />,
      type: 'submenu',
      children: [
        ...organizationList,
        {
          key: routerMeta['organization']['OrganizationRegistrationPage'].path,
          label: 'Registration',
          icon: <EditOutlined />,
          type: 'item',
        },
      ],
    },
    {
      key: 'user',
      label: 'User',
      icon: <UserOutlined />,
      type: 'submenu',
      children: [
        {
          key: routerMeta['user']['SearchActivityPage'].path,
          label: 'Search Activity',
          icon: <DashboardOutlined />,
          type: 'item',
        },
        {
          key: `/${userId}/profile`,
          label: 'User profile',
          icon: <ProfileOutlined />,
          type: 'item',
        },
        {
          key: routerMeta['user']['MainDashboardPage'].path,
          label: 'User dashboard',
          icon: <DashboardOutlined />,
          type: 'item',
        },
      ],
    },
    {
      key: SIGNOUT_KEY,
      label: 'Sign out',
      icon: <LogoutOutlined />,
      type: 'item',
    },
  ];
};
