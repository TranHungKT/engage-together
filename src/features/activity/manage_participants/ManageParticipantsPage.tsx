import React, { useState } from 'react';
import { Button, Col, Row, Spin, Typography } from 'antd';
import { useParams } from 'react-router-dom';
import Participants from './Participants/Participants';

import './styles.scss';
import { useErrorModal } from '@/components/modal/useErrorModal';
import { QueryError } from '@/models/query.models';
import { useGetActivityDetailsSuspense, useManageParticipants } from '@/queries/activity.query';

export interface DataType {
  key: string;
  id: string;
  participant: string;
  status: string;
}

export default function ManageParticipantsPage() {
  const { activityId } = useParams();
  const {
    data: { title, users },
    refetch,
  } = useGetActivityDetailsSuspense({ activityId: activityId || '' });

  const manageParticipants = useManageParticipants();

  const [dataSource, setDataSource] = useState<DataType[]>(
    users.map((user) => ({
      key: user.userId,
      id: user.userId,
      participant: user.username,
      status: user.status,
    })),
  );
  const [error, setError] = useState('');

  const [showModal] = useErrorModal(
    {
      message: error,
    },
    [error],
  );
  const handleSave = () => {
    manageParticipants.mutate(
      {
        activityId: activityId || '',
        updatedParticipants: dataSource.map((data) => ({
          userId: data.id,
          status: data.status,
        })),
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

  return (
    <Spin spinning={manageParticipants.isPending}>
      <Row justify="center" className="manage_participant">
        <Col
          xxl={{ span: 16 }}
          xl={{ span: 16 }}
          lg={{ span: 16 }}
          md={{ span: 22 }}
          sm={{ span: 22 }}
          xs={{ span: 22 }}
        >
          <Typography.Title level={3}>Manage Participants</Typography.Title>
          <Typography.Text type="secondary">
            Mark attendance and completion for the {`'${title}'`} activity.
          </Typography.Text>
          <Participants dataSource={dataSource} setDataSource={setDataSource} />
          <Row justify="space-between" style={{ marginTop: '20px' }}>
            <Col>
              <Button type="primary">Add participant</Button>
            </Col>
            <Col>
              <Button type="primary" onClick={handleSave}>
                Save
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Spin>
  );
}
