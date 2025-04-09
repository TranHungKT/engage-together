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
    feature: 'organization',
    name: 'Organization Registration',
    path: '/organization/registration',
    isShow: true,
    isAuth: false,
  },
  CreateOpportunityPage: {
    feature: 'opportunity',
    name: 'Create Opportunity',
    path: '/opportunity/create',
    isShow: true,
    isAuth: false,
  },
  MainDashboardPage: {
    feature: 'dashboard',
    name: 'Dashboard',
    path: '/dashboard',
    isShow: true,
    isAuth: false,
  },
};

export default routerMeta;
