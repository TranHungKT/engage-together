import apiClient from '../apiClient';

export const getCurrentUserDetails = async () => {
  return await apiClient({
    method: 'get',
    url: '/user',
  });
};
