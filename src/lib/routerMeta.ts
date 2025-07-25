export interface IRouterMeta {
  name?: string;
  path: string;
  feature: string;
  isShow: boolean;
  isCommon?: boolean;
  isAuth?: boolean;
  icon?: string;
}

export type RouterMetaType = {
  [key: string]: IRouterMeta;
};

const routerMeta: RouterMetaType = {
  OrganizationRegistrationPage: {
    feature: 'organization/registration',
    name: 'Organization Registration',
    path: '/organization/registration',
    isShow: true,
    isAuth: true,
  },
  OrganizationDashboardPage: {
    feature: 'organization/dashboard',
    name: 'Organization Dashboard',
    path: '/organization/dashboard/:id',
    isShow: true,
    isAuth: true,
  },
  CreateActivityPage: {
    feature: 'activity/create',
    name: 'Create Activity',
    path: '/activity/create',
    isShow: true,
    isAuth: true,
  },
  MainDashboardPage: {
    feature: 'dashboard/user',
    name: 'Dashboard',
    path: '/dashboard',
    isShow: true,
    isAuth: true,
  },
  LoginPage: {
    feature: 'login',
    name: 'Login',
    path: '/login',
    isShow: true,
    isAuth: false,
  },
};

export default routerMeta;
