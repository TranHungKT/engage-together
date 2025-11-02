import React from 'react';

import './App.css';

import { ConfigProvider, Layout, Menu } from 'antd';

import { useNavigate } from 'react-router-dom';
import { ModalProvider } from './components/modal/ModalProvider';
import { SIGNOUT_KEY } from './constants/menu.constant';
import UserContextProvider from './contexts/UserContextProvider';
import { useUserDetailsContext } from './lib/hooks/useUserDetailsContext';
import { getMenu } from './lib/menuMeta';
import Router from './Router';
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const { isLogin, userInfo, signout } = useUserDetailsContext();

  const items = getMenu({ isLogin, userInfo });
  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: 'public-sans-regular',
        },
      }}
    >
      <UserContextProvider>
        <ModalProvider>
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible>
              <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
                onSelect={(item) => {
                  if (item.key === SIGNOUT_KEY) {
                    return signout();
                  }
                  return navigate(item.key, { replace: true });
                }}
              />
            </Sider>
            <Layout>
              <Header style={{ padding: 0 }} />
              <Content style={{ margin: '0 16px' }}>
                <Router />
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </ModalProvider>
      </UserContextProvider>
    </ConfigProvider>
  );
}

export default App;
