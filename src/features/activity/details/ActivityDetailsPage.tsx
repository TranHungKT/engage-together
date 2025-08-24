import React, { useContext } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import DetailsSection from './DetailsSection/DetailsSection';
import { UserContext } from '@/contexts/UserContextProvider';
import { useGetActivityDetailsSuspense } from '@/queries/activity.query';

export default function ActivityDetailsPage() {
  const { activityId } = useParams();
  const {
    data: { title, description, users },
    data,
  } = useGetActivityDetailsSuspense({ activityId: activityId || '' });

  const { userId } = useContext(UserContext);

  const renderJoinActivityButton = () => {
    const userIds = users.map((user) => user.userId);

    if (!userId || userIds?.includes(userId)) {
      return <></>;
    }

    return <Button type="primary">Join Activity</Button>;
  };

  return (
    <Row justify="center">
      <Col
        xxl={{ span: 16 }}
        xl={{ span: 16 }}
        lg={{ span: 16 }}
        md={{ span: 22 }}
        sm={{ span: 22 }}
        xs={{ span: 22 }}
      >
        <Typography.Title>{title}</Typography.Title>
        <Typography.Text>{description}</Typography.Text>
        <DetailsSection {...data} />
        <Typography.Title>TODO: PARTICIPANTS</Typography.Title>
        {renderJoinActivityButton()}
      </Col>
    </Row>
  );
}
