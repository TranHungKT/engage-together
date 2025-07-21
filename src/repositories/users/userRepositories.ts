import apiClient from '../apiClient';
import { CurrentUserDetailsResponse } from './userRepositories.params';

export const getCurrentUserDetails = async (): Promise<CurrentUserDetailsResponse> => {
  return await apiClient({
    method: 'get',
    url: '/user',
  });
};
