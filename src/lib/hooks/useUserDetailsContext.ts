import token from '../token';
import { ACCESS_TOKEN_KEY } from '@/constants/token.constant';
import { useCurrentUserDetails } from '@/queries/users.query';
import { CurrentUserDetailsResponse } from '@/repositories/users/userRepositories.params';

type UserDetails = {
  isLogin: boolean;
  userInfo: Partial<CurrentUserDetailsResponse['data']>;
  isLoading: boolean;
  signout: () => void;
};

export const useUserDetailsContext = (): UserDetails => {
  // THIS API WILL CLEAR TOKEN AND RELOAD WINDOW IN CASE TOKEN IS INVALID
  const { data, isSuccess, isLoading } = useCurrentUserDetails(token.getToken(ACCESS_TOKEN_KEY));

  const signout = () => {
    token.removeToken(ACCESS_TOKEN_KEY);
    window.location.reload();
  };

  return {
    isLogin: isSuccess,
    userInfo: { ...data },
    isLoading,
    signout,
  };
};
