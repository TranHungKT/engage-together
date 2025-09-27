import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { QUERY_ACTIVITY_DETAILS_KEY, QUERY_SEARCH_ACTIVITY_KEY } from '@/constants/query.constant';
import {
  createActivity,
  getActivityDetails,
  joinActivity,
  manageParticipants,
  searchActivity,
} from '@/repositories/activities/activityRepositories';
import {
  GetActivityDetailsRequest,
  SearchActivityRequest,
} from '@/repositories/activities/activityRepositories.params';

export const useSuspenseSearchActivity = (searchActivityRequest: SearchActivityRequest) =>
  useSuspenseQuery({
    queryFn: () => searchActivity(searchActivityRequest).then((res) => res.data),
    queryKey: [QUERY_SEARCH_ACTIVITY_KEY],
  });

export const useCreateActivityMutation = () =>
  useMutation({
    mutationFn: createActivity,
  });

export const useJoinActivity = () =>
  useMutation({
    mutationFn: joinActivity,
  });

export const useManageParticipants = () =>
  useMutation({
    mutationFn: manageParticipants,
  });

export const useGetActivityDetailsSuspense = (request: GetActivityDetailsRequest) =>
  useSuspenseQuery({
    queryFn: () => getActivityDetails(request).then((res) => res.data),
    queryKey: [QUERY_ACTIVITY_DETAILS_KEY, request.activityId],
  });
