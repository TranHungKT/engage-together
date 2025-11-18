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

export type RouterMeta = {
  [group: string]: RouterMetaType;
};

const routerMeta: RouterMeta = {
  organization: {
    OrganizationRegistrationPage: {
      feature: 'organization/registration',
      name: 'Organization Registration',
      path: '/registration',
      isShow: true,
      isAuth: true,
    },
    OrganizationDashboardPage: {
      feature: 'organization/dashboard',
      name: 'Organization Dashboard',
      path: '/:id/dashboard/',
      isShow: true,
      isAuth: true,
    },
    CreateActivityPage: {
      feature: 'activity/create',
      name: 'Create Activity',
      path: '/activity/create/:organizationId',
      isShow: true,
      isAuth: true,
    },
    ActivityDetailsPage: {
      feature: 'activity/details',
      name: 'Activity Details',
      path: '/:organizationId/dashboard/activity/:activityId',
      isShow: true,
      isAuth: true,
    },
    ManageParticipantsPage: {
      feature: 'activity/manage_participants',
      name: 'Manage Participants',
      path: '/:organizationId/dashboard/activity/:activityId/manage_participants',
      isShow: true,
      isAuth: true,
    },
  },
  user: {
    CreateActivityPage: {
      feature: 'activity/create',
      name: 'Create Activity',
      path: '/activity/create/:organizationId',
      isShow: true,
      isAuth: true,
    },
    ActivityDetailsPage: {
      feature: 'activity/details',
      name: 'Activity Details',
      path: '/search_activity/:activityId',
      isShow: true,
      isAuth: true,
    },
    ManageParticipantsPage: {
      feature: 'activity/manage_participants',
      name: 'Manage Participants',
      path: '/activity/details/:activityId/manage_participants',
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
    UserProfilePage: {
      feature: 'user/profile',
      name: 'User Profile',
      path: '/:userId/profile',
      isShow: true,
      isAuth: true,
    },
    SearchActivityPage: {
      feature: 'user/search_activity',
      name: 'Search Activity',
      path: '/search_activity',
      isShow: true,
      isAuth: true,
    },
  },
  authentication: {
    LoginPage: {
      feature: 'login',
      name: 'Login',
      path: '/login',
      isShow: true,
      isAuth: false,
    },
  },
};

export default routerMeta;
