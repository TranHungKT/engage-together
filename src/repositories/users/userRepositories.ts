import apiClient from '../apiClient';
import {
  CurrentUserDetailsResponse,
  GetUserProfileRequest,
  GetUserProfileResponse,
  LoginUserRequest,
  LoginUserResponse,
  SearchUserRequest,
  SearchUserResponse,
} from './userRepositories.params';

export const getCurrentUserDetails = async (): Promise<CurrentUserDetailsResponse> => {
  return await apiClient({
    method: 'get',
    url: '/user',
  });
};

export const getUserProfile = async (
  params: GetUserProfileRequest,
): Promise<GetUserProfileResponse> => {
  return await apiClient({
    method: 'get',
    url: `/user/profile/${params.userId}`,
  });
};

export const loginUser = async (params: LoginUserRequest): Promise<LoginUserResponse> => {
  return await apiClient({
    method: 'post',
    url: 'user/login',
    data: { ...params },
  });
};

export const searchUser = async (params: SearchUserRequest): Promise<SearchUserResponse> => {
  return await apiClient({
    method: 'post',
    url: 'user/search',
    data: { ...params },
  });
};
