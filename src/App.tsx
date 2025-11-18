import './App.css';

import { Col, ConfigProvider, Layout, Row } from 'antd';

import Menu from './components/Menu/Menu';
import { ModalProvider } from './components/modal/ModalProvider';
import UserContextProvider from './contexts/UserContextProvider';
import Router from './Router';

const { Header, Content, Footer, Sider } = Layout;

function App() {
  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
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
              <Menu />
            </Sider>
            <Layout>
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
