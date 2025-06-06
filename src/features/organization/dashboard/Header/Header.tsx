import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Row, Typography } from 'antd';
import { OrganizationType, OrganizationTypeKeys } from '@/constants/organization.constant';
import { GetOrganizationDetailsResponse } from '@/repositories/organizations/organizationRepositories.params';

interface HeaderProps {
  organizationDetails: GetOrganizationDetailsResponse['data'];
}

const { Title, Text } = Typography;

export default function Header({ organizationDetails }: HeaderProps) {
  return (
    <Row>
      <Col>
        <Avatar icon={<AntDesignOutlined />} />
      </Col>
      <Col>
        <Title level={3}>{organizationDetails.name}</Title>
        <Text>
          {organizationDetails.type === 'OTHER'
            ? organizationDetails.otherType
            : OrganizationType[organizationDetails.type as OrganizationTypeKeys]}{' '}
          organization
        </Text>
        <Text>{organizationDetails.numberOfFollowers} followers</Text>
      </Col>
      <Col>
        <Button>Edit profile</Button>
      </Col>
    </Row>
  );
}
