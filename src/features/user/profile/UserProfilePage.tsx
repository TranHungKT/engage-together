import { Suspense } from 'react';

import { Avatar, Button, Col, Row, Tabs, TabsProps, Typography } from 'antd';
import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

import Overview from './Overview/Overview';

import LoadingFallback from '@/components/LoadingFallback';
import CardContent from '@/features/dashboard/user/CardContent/CardContent';
import { useSuspenseUserProfile } from '@/queries/users.query';

export default function UserProfilePage() {
  const { userId } = useParams();

  const { data } = useSuspenseUserProfile({ userId: userId || '' });

  const items: TabsProps['items'] = [
    {
      key: 'OVERVIEW',
      label: 'Overview',
      children: <Overview userId={userId || ''} />,
    },
    {
      key: 'CONTRIBUTIONS',
      label: 'Contributions',
      children: 'Content of Tab Pane 2',
    },
    {
      key: 'My_ORGANIZATION',
      label: 'My Organizations',
      children: 'Content of Tab Pane 3',
    },
  ];

  return (
    <Row justify="center" style={{ marginTop: '100px' }}>
      <Col
        xxl={{ span: 16 }}
        xl={{ span: 16 }}
        lg={{ span: 16 }}
        md={{ span: 22 }}
        sm={{ span: 22 }}
        xs={{ span: 22 }}
      >
        <Row justify="center">
          <Col span={5}>
            <Row justify="center">
              <Avatar src={data.avatar} size={150} />
            </Row>
            <Row justify="center">
              <Typography.Title level={5}>{data.username}</Typography.Title>
            </Row>
            <Row justify="center">
              <Typography.Text type="secondary">{data.email}</Typography.Text>
            </Row>
            <Row justify="center">
              <Typography.Text type="secondary">
                Joined in: {dayjs(data.createdDt).format('dddd, MMMM DD, YYYY')}
              </Typography.Text>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={8}>
            <Button shape="round" color="default" variant="filled" style={{ width: '100%' }}>
              Edit Profile
            </Button>
          </Col>
        </Row>

        <Row gutter={24} align="middle" style={{ marginTop: '20px' }}>
          <Col span={8}>
            <CardContent
              cardNumber={data.numberOfActivityRegistered}
              content="Activities Registered"
            />
          </Col>
          <Col span={8}>
            <CardContent
              cardNumber={data.numberOfActivityCompleted}
              content="Activities Completed"
            />
          </Col>
          <Col span={8}>
            <CardContent
              cardNumber={data.numberOfDidNotJoinActivity}
              content="Activities Did Not Join"
            />
          </Col>
        </Row>
        <Row>
          <Suspense fallback={<LoadingFallback />}>
            <Col span={24}>
              <Tabs defaultActiveKey="OVERVIEW" items={items} onChange={() => {}} />
            </Col>
          </Suspense>
        </Row>
      </Col>
    </Row>
  );
}
