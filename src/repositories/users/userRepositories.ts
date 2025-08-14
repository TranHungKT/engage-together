import apiClient from '../apiClient';
import {
  CurrentUserDetailsResponse,
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
