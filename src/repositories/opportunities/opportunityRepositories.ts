import apiClient from '../apiClient';
import { SearchOpportunityParams, SearchOpportunityResponse } from './opportunity.params';

export const searchOpportunities = async (
  searchOpportunityParams: SearchOpportunityParams,
): Promise<{ data: SearchOpportunityResponse }> => {
  return await apiClient({
    method: 'post',
    url: '/opportunity/search',
    data: {
      ...searchOpportunityParams,
    },
  });
};
