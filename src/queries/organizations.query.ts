import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import {
  QUERY_ORGANIZATION_DETAILS_KEY,
  QUERY_ORGANIZATION_SUMMARY_KEY,
} from '@/constants/query.constant';
import {
  createOrganization,
  getOrganizationDetails,
  getOrganizationSummary,
} from '@/repositories/organizations/organizationRepositories';
import {
  GetOrganizationDetailsParams,
  GetOrganizationSummaryParams,
} from '@/repositories/organizations/organizationRepositories.params';

export const useCreateOrganizationMutation = () =>
  useMutation({
    mutationFn: createOrganization,
  });

export const useGetOrganizationSummary = ({ organizationId }: GetOrganizationSummaryParams) =>
  useSuspenseQuery({
    queryFn: () => getOrganizationSummary({ organizationId }).then((res) => res.data),
    queryKey: [QUERY_ORGANIZATION_SUMMARY_KEY, organizationId],
    refetchOnMount: 'always',
  });

export const useGetOrganizationDetails = ({ organizationId }: GetOrganizationDetailsParams) =>
  useSuspenseQuery({
    queryFn: () => getOrganizationDetails({ organizationId }).then((res) => res.data),
    queryKey: [QUERY_ORGANIZATION_DETAILS_KEY, organizationId],
    refetchOnMount: 'always',
  });
