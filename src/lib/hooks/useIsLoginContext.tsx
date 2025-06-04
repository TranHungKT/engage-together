import { useState } from 'react';
import token from '../token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.constant';

export const useIsLoginContext = () => {
  const [isLogin, setIsLogin] = useState(!!token.getToken(ACCESS_TOKEN_KEY));

  return {
    isLogin,
    setIsLogin,
  };
};
