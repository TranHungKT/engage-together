import apiClient from '../apiClient';
import { SearchActivityRequest, SearchActivityResponse } from './activityRepositories.params';

export const searchActivity = async (
  searchActivityRequest: SearchActivityRequest,
): Promise<SearchActivityResponse> => {
  return await apiClient({
    method: 'post',
    url: 'activity/search',
    data: {
      ...searchActivityRequest,
    },
  });
};
