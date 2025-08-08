import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, List, Row, Typography } from 'antd';

import CardContent from './CardContent/CardContent';
import { useGetOrganizationSummary } from '@/queries/organizations.query';

const { Title } = Typography;

const list = [
  { event: 'New volunteer sign-up', time: 'Jun 1' },
  { event: 'New event registration', time: 'Jun 2' },
  { event: 'New volunteer activity', time: 'Jun 1' },
];

export default function MainDashboardPage() {
  const { data } = useGetOrganizationSummary({
    organizationId: '076c3cc5-3a2d-4ead-b8cf-477e2eef0745',
  });

  return (
    <>
      <Row>
        <Title>Welcome back, City Parks</Title>
      </Row>
      <Row gutter={24} align="middle">
        <Col span={8}>
          <CardContent cardNumber={data?.totalVolunteers} content="total volunteers" />
        </Col>
        <Col span={8}>
          <CardContent cardNumber={data.numberOfActiveActivity} content="active activities" />
        </Col>
        <Col span={8}>
          <CardContent cardNumber={data.numberOfUpcomingActivity} content="upcoming events" />
        </Col>
      </Row>
      <Col>
        <Title level={3}>Recent activity</Title>
        <List
          itemLayout="horizontal"
          dataSource={list}
          renderItem={(item) => (
            <>
              <List.Item
                actions={[
                  <Button icon={<ArrowRightOutlined />} key="arrowRightOutlined" type="text" />,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={'https://randomuser.me/api/portraits/thumb/women/25.jpg'} />}
                  title={<a href="https://ant.design">{item.event}</a>}
                  description={item.time}
                />
              </List.Item>
            </>
          )}
        />
      </Col>
    </>
  );
}
