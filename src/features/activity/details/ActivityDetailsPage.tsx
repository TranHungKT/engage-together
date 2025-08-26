import React, { useContext, useState } from 'react';
import { Button, Col, Row, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import DetailsSection from './DetailsSection/DetailsSection';
import { useErrorModal } from '@/components/modal/useErrorModal';
import { UserContext } from '@/contexts/UserContextProvider';
import { QueryError } from '@/models/query.models';
import { useGetActivityDetailsSuspense, useJoinActivity } from '@/queries/activity.query';

export default function ActivityDetailsPage() {
  const { activityId } = useParams();
  const {
    data: { title, description, users },
    data,
    refetch,
  } = useGetActivityDetailsSuspense({ activityId: activityId || '' });

  const joinActivity = useJoinActivity();

  const { userId } = useContext(UserContext);
  const [error, setError] = useState('');

  const [showModal] = useErrorModal(
    {
      message: error,
    },
    [error],
  );

  const handleJoinActivity = () => {
    joinActivity.mutate(
      {
        activityId: activityId || '',
        role: 'VOLUNTEER',
      },
      {
        onSuccess: () => {
          refetch();
        },
        onError: (mutateError) => {
          setError((mutateError as QueryError)?.response.data.message);
          showModal();
        },
      },
    );
  };

  const renderJoinActivityButton = () => {
    const userIds = users.map((user) => user.userId);

    if (!userId || userIds?.includes(userId)) {
      return <></>;
    }

    return (
      <Button type="primary" onClick={handleJoinActivity}>
        Join Activity
      </Button>
    );
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
