import React, { lazy, Suspense } from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';

import ErrorFallback from './components/ErrorFallback';
import LoadingFallback from './components/LoadingFallback';
import ProtectedRoute from './HOC/ProtectedRoute';
import routerMeta, { IRouterMeta } from '@/lib/routerMeta';

const lazyImport = (pageName: string) => lazy(() => import(`@/features/${pageName}`));

const assignRouter = Object.keys(routerMeta).map((componentKey: string) => {
  const props: IRouterMeta = routerMeta[componentKey];

  return {
    Component: lazyImport(`${props.feature}/${componentKey}`),
    props,
  };
});

const Router = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Routes>
      {assignRouter.map(({ Component, props }) => (
        <Route
          key={props.path}
          path={props.path}
          element={
            <ProtectedRoute path={props.path}>
              <Suspense fallback={<LoadingFallback />}>
                <ErrorBoundary
                  onReset={reset}
                  fallbackRender={({ resetErrorBoundary }) => (
                    <ErrorFallback resetErrorBoundary={resetErrorBoundary} />
                  )}
                >
                  <Component />
                </ErrorBoundary>
              </Suspense>
            </ProtectedRoute>
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
