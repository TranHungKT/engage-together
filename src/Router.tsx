import { lazy, Suspense } from 'react';

import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { Route, Routes } from 'react-router-dom';

import ErrorFallback from './components/ErrorFallback';
import LoadingFallback from './components/LoadingFallback';
import ProtectedRoute from './HOC/ProtectedRoute';

import routerMeta, { IRouterMeta } from '@/lib/routerMeta';

const lazyImport = (pageName: string) => lazy(() => import(`@/features/${pageName}`));

const getAssignRouter = (path: string) => {
  return Object.keys(routerMeta[path]).map((componentKey: string) => {
    const props: IRouterMeta = routerMeta[path][componentKey];

    return {
      Component: lazyImport(`${props.feature}/${componentKey}`),
      props,
    };
  });
};

const assignPaths = Object.keys(routerMeta);

const Router = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <Routes>
      {assignPaths.map((path) => (
        <Route path={path} key={path}>
          {getAssignRouter(path).map(({ Component, props }) => (
            <Route
              key={props.path}
              path={props.path}
              element={
                <ProtectedRoute path={`/${path}/${props.path}`}>
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
        </Route>
      ))}
    </Routes>
  );
};

export default Router;
