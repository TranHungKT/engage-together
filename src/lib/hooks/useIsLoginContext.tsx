import token from '../token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.constant';
import { useCurrentUserDetails } from '@/queries/users.query';

export const useIsLoginContext = () => {
  const { data, isFetched, isSuccess } = useCurrentUserDetails();
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);

  if (accessToken && isFetched && isSuccess) {
    return {
      isLogin: true,
    };
  }

  return {
    isLogin: false,
  };
};
