import React from 'react';

import './App.css';

import { Col, ConfigProvider, Layout, Menu, Row } from 'antd';

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
            <Layout style={{ backgroundColor: 'white' }}>
              <Header style={{ padding: 0 }} />
              <Content>
                <Row>
                  <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 4 }} />
                  <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 22 }} lg={{ span: 16 }}>
                    <Router />
                  </Col>
                  <Col xs={{ span: 1 }} sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 4 }} />
                </Row>
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
