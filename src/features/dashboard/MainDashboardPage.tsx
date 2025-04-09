import React from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, List, Row, Typography } from 'antd';

import CardContent from './CardContent/CardContent';

const { Title } = Typography;

const list = [
  { event: 'New volunteer sign-up', time: 'Jun 1' },
  { event: 'New event registration', time: 'Jun 2' },
  { event: 'New volunteer opportunity', time: 'Jun 1' },
];

export default function MainDashboardPage() {
  return (
    <>
      <Row>
        <Title>Welcome back, City Parks</Title>
      </Row>
      <Row gutter={24} align="middle">
        <Col span={8}>
          <CardContent cardNumber={245} content="total volunteers" />
        </Col>
        <Col span={8}>
          <CardContent cardNumber={22} content="active opportunities" />
        </Col>
        <Col span={8}>
          <CardContent cardNumber={5} content="upcoming events" />
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
