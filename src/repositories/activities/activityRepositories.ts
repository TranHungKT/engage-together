import apiClient from '../apiClient';
import {
  CreateActivityRequest,
  SearchActivityRequest,
  SearchActivityResponse,
} from './activityRepositories.params';

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

export const createActivity = async (createActivityRequest: CreateActivityRequest) => {
  return await apiClient({
    method: 'post',
    url: 'activity/create',
    data: {
      ...createActivityRequest,
    },
  });
};
