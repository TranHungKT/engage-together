import token from '../token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.constant';
import { useCurrentUserDetails } from '@/queries/users.query';

export const useIsLoginContext = () => {
  // THIS API WILL CLEAR TOKEN AND RELOAD WINDOW INCASE TOKEN IS INVALID
  const { data, isSuccess, isLoading } = useCurrentUserDetails(token.getToken(ACCESS_TOKEN_KEY));

  return {
    isLogin: isSuccess,
    userId: data?.id,
    isLoading,
  };
};
