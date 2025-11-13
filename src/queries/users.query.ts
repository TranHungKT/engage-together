import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

import {
  QUERY_CURRENT_USER_DETAILS_KEY,
  QUERY_SEARCH_USER_KEY,
  QUERY_USER_PROFILE_KEY,
} from '@/constants/query.constant';
import {
  getCurrentUserDetails,
  getUserProfile,
  loginUser,
  searchUser,
} from '@/repositories/users/userRepositories';
import {
  GetUserProfileRequest,
  SearchUserRequest,
} from '@/repositories/users/userRepositories.params';

export const useCurrentUserDetails = (token: string | null) =>
  useQuery({
    queryFn: () => getCurrentUserDetails().then((res) => res.data),
    queryKey: [QUERY_CURRENT_USER_DETAILS_KEY, token],
    enabled: !!token,
  });

export const useSuspenseUserProfile = (params: GetUserProfileRequest) =>
  useSuspenseQuery({
    queryFn: () => getUserProfile(params).then((res) => res.data),
    queryKey: [QUERY_USER_PROFILE_KEY, params.userId],
  });

export const useLoginUserMutation = () =>
  useMutation({
    mutationFn: loginUser,
  });

export const useSearchUser = (params: SearchUserRequest) =>
  useSuspenseQuery({
    queryFn: () => searchUser(params).then((res) => res.data),
    queryKey: [QUERY_SEARCH_USER_KEY],
  });
