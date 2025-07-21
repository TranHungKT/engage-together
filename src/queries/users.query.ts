import { useQuery } from '@tanstack/react-query';
import { QUERY_CURRENT_USER_DETAILS_KEY } from '@/constants/query.constant';
import { getCurrentUserDetails } from '@/repositories/users/userRepositories';

export const useCurrentUserDetails = (isLogin: boolean) =>
  useQuery({
    queryFn: () => getCurrentUserDetails().then((res) => res.data),
    queryKey: [QUERY_CURRENT_USER_DETAILS_KEY],
    enabled: isLogin,
  });
