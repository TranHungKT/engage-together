import React from 'react';

import './App.css';
import { ConfigProvider } from 'antd';

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
      <Router />
    </ConfigProvider>
  );
}

export default App;
