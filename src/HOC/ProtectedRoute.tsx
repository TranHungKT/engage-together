import React, { useContext } from 'react';
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

  if (!isLogin && path !== routerMeta.LoginPage.path) {
    return <Navigate to={routerMeta.LoginPage.path} replace={true} />;
  }

  if (isLogin && path === routerMeta.LoginPage.path) {
    return <Navigate to={routerMeta.MainDashboardPage.path} replace={true} />;
  }

  return children;
}
