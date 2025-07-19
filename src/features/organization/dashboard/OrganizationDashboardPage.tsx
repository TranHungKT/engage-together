import React from 'react';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import Header from './Header/Header';
import CardContent from '@/features/dashboard/user/CardContent/CardContent';
import { useGetOrganizationDetails } from '@/queries/organizations.query';

export default function OrganizationDashboardPage() {
  const { id } = useParams();
  const { data } = useGetOrganizationDetails({
    organizationId: id || '',
  });

  return (
    <div>
      <Header organizationDetails={data} />
      <Row gutter={24} align="middle">
        <Col span={8}>
          <CardContent cardNumber={data.numberOfOpportunity} content="total active opportunities" />
        </Col>
        <Col span={8}>
          <CardContent cardNumber={data.numberOfFollowers} content="total followers" />
        </Col>
        <Col span={8}>
          <CardContent cardNumber={20} content="upcoming events" />
        </Col>
      </Row>
    </div>
  );
}
