import { useSuspenseQuery } from '@tanstack/react-query';
import { QUERY_SEARCH_ACTIVITY_KEY } from '@/constants/query.constant';
import { searchActivity } from '@/repositories/activities/activityRepositories';
import {
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
