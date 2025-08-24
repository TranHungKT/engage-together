import apiClient from '../apiClient';
import {
  CreateActivityRequest,
  GetActivityDetailsRequest,
  GetActivityDetailsResponse,
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

export const getActivityDetails = async (
  request: GetActivityDetailsRequest,
): Promise<GetActivityDetailsResponse> => {
  return await apiClient({
    method: 'get',
    url: `activity/${request.activityId}`,
  });
};
