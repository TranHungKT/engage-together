import { OrganizationParams } from './organizationRepositories.params';
import apiClient from '@/repositories/apiClient';

export const createOrganization = async ({ name }: OrganizationParams) => {
  return await apiClient({
    method: 'post',
    url: 'register/organization',
    data: {
      name,
    },
  });
};
