import token from '../token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.constant';
import { useCurrentUserDetails } from '@/queries/users.query';

export const useUserDetailsContext = () => {
  // THIS API WILL CLEAR TOKEN AND RELOAD WINDOW IN CASE TOKEN IS INVALID
  const { data, isSuccess, isLoading } = useCurrentUserDetails(token.getToken(ACCESS_TOKEN_KEY));

  const signout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    window.location.reload();
  };

  return {
    isLogin: isSuccess,
    userId: data?.id,
    username: data?.username,
    email: data?.email,
    isLoading,
    signout,
  };
};
