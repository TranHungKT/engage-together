import { OrganizationParams } from './organizationRepositories.params';
import apiClient from '@/repositories/apiClient';

export const createOrganization = async (organizationRequest: OrganizationParams) => {
  return await apiClient({
    method: 'post',
    url: 'register/organization',
    data: {
      ...organizationRequest,
    },
  });
};
