import { useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_ORGANIZATION_SUMMARY_KEY } from '@/constants/query.constant';
import {
  createOrganization,
  getOrganizationSummary,
} from '@/repositories/organizations/organizationRepositories';
import { GetOrganizationSummaryParams } from '@/repositories/organizations/organizationRepositories.params';

export const useCreateOrganizationMutation = () =>
  useMutation({
    mutationFn: createOrganization,
  });

export const useGetOrganizationSummary = ({ organizationId }: GetOrganizationSummaryParams) =>
  useQuery({
    queryFn: () => getOrganizationSummary({ organizationId }).then((res) => res.data),
    queryKey: [QUERY_ORGANIZATION_SUMMARY_KEY, organizationId],
  });
