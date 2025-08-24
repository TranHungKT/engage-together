import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { QUERY_ACTIVITY_DETAILS_KEY, QUERY_SEARCH_ACTIVITY_KEY } from '@/constants/query.constant';
import {
  createActivity,
  getActivityDetails,
  searchActivity,
} from '@/repositories/activities/activityRepositories';
import {
  GetActivityDetailsRequest,
  GetActivityDetailsResponse,
  SearchActivityRequest,
  SearchActivityResponse,
} from '@/repositories/activities/activityRepositories.params';

export const useSuspenseSearchActivity = (
  searchActivityRequest: SearchActivityRequest,
): SearchActivityResponse =>
  useSuspenseQuery({
    queryFn: () => searchActivity(searchActivityRequest).then((res) => res.data),
    queryKey: [QUERY_SEARCH_ACTIVITY_KEY],
  });

export const useCreateActivityMutation = () =>
  useMutation({
    mutationFn: createActivity,
  });

export const useGetActivityDetailsSuspense = (
  request: GetActivityDetailsRequest,
): GetActivityDetailsResponse =>
  useSuspenseQuery({
    queryFn: () => getActivityDetails(request).then((res) => res.data),
    queryKey: [QUERY_ACTIVITY_DETAILS_KEY, request.activityId],
  });
