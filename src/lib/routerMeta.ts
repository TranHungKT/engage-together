export interface IRouterMeta {
  name?: string;
  path: string;
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
    name: 'Organization Registration',
    path: '/organization/registration',
    isShow: true,
    isAuth: false,
  },
};

export default routerMeta;
