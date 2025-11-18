import { Key } from 'react';

import { flatMap } from 'lodash';
import { useLocation } from 'react-router-dom';

import { Menu } from './menuMeta';

export const useActivateRoute = (allMenu: Menu) => {
  const currentRoute = useLocation();

  const menuKeys = flatMap(allMenu.map((menu) => getMenuKeys(menu, '')));

  return menuKeys
    .filter((item) => currentRoute.pathname.includes(item.fullPath as string))
    .map((item) => item.key);
};

export const getMenuKeys = (
  menuItem: Menu[0],
  currentPath: string,
): { fullPath: string; key: Key }[] => {
  if (menuItem?.type === 'item') {
    return [{ fullPath: currentPath + menuItem.key, key: menuItem.key }];
  } else if (menuItem?.type === 'submenu') {
    currentPath += menuItem?.key;
    return flatMap(menuItem.children.map((item) => getMenuKeys(item, currentPath)));
  }
  return [];
};
