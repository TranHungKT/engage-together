import { useContext } from 'react';

import { Skeleton } from 'antd';
import { Navigate } from 'react-router-dom';

import { UserContext } from '@/contexts/UserContextProvider';
import routerMeta from '@/lib/routerMeta';

interface ProtectedRouteProps {
  children: JSX.Element;
  path: string;
}

export default function ProtectedRoute({ children, path }: ProtectedRouteProps) {
  const { isLogin, isLoading } = useContext(UserContext);

  if (isLoading) {
    return <Skeleton />;
  }

  if (!isLogin && path !== '/authentication/login') {
    return <Navigate to={'/authentication/login'} replace={true} />;
  }

  if (isLogin && path === '/authentication/login') {
    return <Navigate to={routerMeta['user'].MainDashboardPage.path} replace={true} />;
  }

  return children;
}
