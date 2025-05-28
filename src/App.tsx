import React from 'react';

import './App.css';
import { ConfigProvider } from 'antd';

import { ModalProvider } from './components/modal/ModalProvider';
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
      <ModalProvider>
        <Router />
      </ModalProvider>
    </ConfigProvider>
  );
}

export default App;
