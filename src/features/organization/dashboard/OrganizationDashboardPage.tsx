import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import { useGetOrganizationDetails } from '@/queries/organizations.query';

export default function OrganizationDashboardPage() {
  const { id } = useParams();
  const { data } = useGetOrganizationDetails({
    organizationId: id || '',
  });

  return (
    <div>
      <Header organizationDetails={data} />
    </div>
  );
}
