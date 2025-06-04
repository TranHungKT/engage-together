import React from 'react';

import './App.css';
import { ConfigProvider } from 'antd';

import { ModalProvider } from './components/modal/ModalProvider';
import UserContextProvider from './contexts/UserContextProvider';
import Router from './Router';

function App() {
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
          <Router />
        </ModalProvider>
      </UserContextProvider>
    </ConfigProvider>
  );
}

export default App;
