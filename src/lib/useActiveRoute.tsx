import { flatMap } from 'lodash';
import { matchPath, useLocation } from 'react-router-dom';

import { Menu } from './menuMeta';

export const useActivateRoute = (menu: Menu) => {
  const currentRoute = useLocation();

  const menuKeys = flatMap(
    menu
      .map((item) =>
        item?.type === 'submenu' ? item.children?.map((child) => child?.key) : item?.key,
      )
      .filter((item) => Boolean(item)),
  );

  return menuKeys.filter((key) => matchPath(key as string, currentRoute.pathname));
};
