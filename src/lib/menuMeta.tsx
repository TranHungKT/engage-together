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
    return [{ key: 'Login', label: 'Login', icon: <LoginOutlined /> }];
  }

  const { id: userId, organizations } = userInfo;

  const organizationList = (organizations || []).map((org): Menu[0] => ({
    key: `/organization/dashboard/${org.organizationId}`,
    label: org.organizationName,
    icon: <GroupOutlined />,
    type: 'item',
  }));

  return [
    {
      key: 'Organization',
      label: 'Organization',
      icon: <GroupOutlined />,
      type: 'submenu',
      children: [
        ...organizationList,
        {
          key: routerMeta['OrganizationRegistrationPage'].path,
          label: 'Registration',
          icon: <EditOutlined />,
          type: 'item',
        },
      ],
    },
    {
      key: 'User',
      label: 'User',
      icon: <UserOutlined />,
      type: 'submenu',
      children: [
        {
          key: routerMeta['SearchActivityPage'].path,
          label: 'Search Activity',
          icon: <DashboardOutlined />,
          type: 'item',
        },
        {
          key: `/user/${userId}/profile`,
          label: 'User profile',
          icon: <ProfileOutlined />,
          type: 'item',
        },
        {
          key: routerMeta['MainDashboardPage'].path,
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
