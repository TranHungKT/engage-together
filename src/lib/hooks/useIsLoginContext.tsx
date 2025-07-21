import token from '../token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.constant';
import { useCurrentUserDetails } from '@/queries/users.query';

export const useIsLoginContext = () => {
  const { isFetched, isSuccess, data } = useCurrentUserDetails();
  const accessToken = token.getToken(ACCESS_TOKEN_KEY);

  if (accessToken && isFetched && isSuccess) {
    return {
      isLogin: true,
      userId: data.id,
    };
  }

  return {
    isLogin: false,
    userId: null,
  };
};
