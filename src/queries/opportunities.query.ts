import { useSuspenseQuery } from '@tanstack/react-query';
import { QUERY_ORGANIZATION_SUMMARY_KEY } from '@/constants/query.constant';
import { SearchOpportunityParams } from '@/repositories/opportunities/opportunity.params';
import { searchOpportunities } from '@/repositories/opportunities/opportunityRepositories';

export const useSearchOpportunities = (params: SearchOpportunityParams) =>
  useSuspenseQuery({
    queryFn: () => searchOpportunities(params).then((res) => res.data),
    queryKey: [QUERY_ORGANIZATION_SUMMARY_KEY, params.organizationId],
  });
