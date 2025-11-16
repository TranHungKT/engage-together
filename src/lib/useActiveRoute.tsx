import { flatMap } from 'lodash';
import { useLocation } from 'react-router-dom';

import { Menu } from './menuMeta';

export const useActivateRoute = (menu: Menu) => {
  const currentRoute = useLocation();

  const menuKeys = flatMap(
    menu
      .map((item) =>
        item?.type === 'submenu'
          ? item.children?.map((child) => ({ fullPath: item.key + child?.key, key: child?.key }))
          : {
              fullPath: item?.key,
              key: item?.key,
            },
      )
      .filter((item) => Boolean(item)),
  );

  return menuKeys
    .filter((item) => currentRoute.pathname.includes(item.fullPath as string))
    .map((item) => item.key);
};
