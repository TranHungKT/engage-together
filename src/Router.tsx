import React, { lazy } from 'react';

import { Route, Routes } from 'react-router-dom';

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
  return (
    <Routes>
      {assignRouter.map(({ Component, props }) => (
        <Route key={props.path} path={props.path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default Router;
