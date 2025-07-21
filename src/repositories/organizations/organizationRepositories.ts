import {
  GetOrganizationDetailsParams,
  GetOrganizationDetailsResponse,
  GetOrganizationSummaryParams,
  GetOrganizationSummaryResponse,
  OrganizationParams,
} from './organizationRepositories.params';
import apiClient from '@/repositories/apiClient';

export const createOrganization = async (organizationRequest: OrganizationParams) => {
  return await apiClient({
    method: 'post',
    url: '/organization/register',
    data: {
      ...organizationRequest,
    },
  });
};

export const getOrganizationSummary = async (
  getOrganizationSummaryRequest: GetOrganizationSummaryParams,
): Promise<GetOrganizationSummaryResponse> => {
  return await apiClient({
    method: 'get',
    url: `/organization/summary_opportunity/${getOrganizationSummaryRequest.organizationId}`,
  });
};

export const getOrganizationDetails = async (
  getOrganizationDetailsParams: GetOrganizationDetailsParams,
): Promise<GetOrganizationDetailsResponse> => {
  return await apiClient({
    method: 'get',
    url: `/organization/${getOrganizationDetailsParams.organizationId}`,
  });
};
