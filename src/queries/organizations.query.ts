import { useMutation } from '@tanstack/react-query';

import { createOrganization } from '@/repositories/organizations/organizationRepositories';

export const useCreateOrganizationMutation = () =>
  useMutation({
    mutationFn: createOrganization,
  });
