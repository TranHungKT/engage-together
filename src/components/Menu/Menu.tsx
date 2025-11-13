import { Menu as AntMenu } from 'antd';
import { useNavigate } from 'react-router-dom';

import { SIGNOUT_KEY } from '@/constants/menu.constant';
import { useUserDetailsContext } from '@/lib/hooks/useUserDetailsContext';
import { getMenu } from '@/lib/menuMeta';

export default function Menu() {
  const { isLogin, userInfo, signout } = useUserDetailsContext();

  const items = getMenu({ isLogin, userInfo });
  const navigate = useNavigate();
  return (
    <AntMenu
      theme="dark"
      defaultSelectedKeys={['1']}
      mode="inline"
      items={items}
      onSelect={(item) => {
        if (item.key === SIGNOUT_KEY) {
          return signout();
        }
        return navigate(item.key);
      }}
    />
  );
}
