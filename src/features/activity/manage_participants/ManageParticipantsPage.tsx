import React, { useState } from 'react';
import { Button, Col, Row, Space, Table, TableProps, Typography } from 'antd';
import startCase from 'lodash/startCase';
import toLower from 'lodash/toLower';
import { useParams } from 'react-router-dom';
import { ACTIVITY_PARTICIPANT_STATUS } from '@/constants/activity.constant';
import { useGetActivityDetailsSuspense } from '@/queries/activity.query';
import './styles.scss';
interface DataType {
  key: string;
  participant: string;
  status: string;
}

export default function ManageParticipantsPage() {
  const { activityId } = useParams();
  const {
    data: { title, users },
  } = useGetActivityDetailsSuspense({ activityId: activityId || '' });
  const [dataSource, setDataSource] = useState<DataType[]>(
    users.map((user) => ({
      key: user.userId,
      participant: user.username,
      status: user.status,
    })),
  );
  const handleRemoveParticipant = (key: string) => {
    setDataSource(dataSource.filter((data) => data.key !== key));
  };

  const handleChangeStatus = (key: string, status: string) => {
    setDataSource(
      dataSource.map((data) => (data.key === key ? { ...data, status: status } : data)),
    );
  };

  const columns: TableProps<DataType>['columns'] = [
    {
      key: 'participant',
      dataIndex: 'participant',
      title: 'Participant',
      render: (username) => <Typography.Text>{username}</Typography.Text>,
    },
    {
      key: 'status',
      dataIndex: 'status',
      title: 'Status',
      render: (status) => <Typography.Text>{startCase(toLower(status))}</Typography.Text>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, user) => (
        <Space size="middle">
          <Button
            type="text"
            onClick={() => handleChangeStatus(user.key, ACTIVITY_PARTICIPANT_STATUS.JOINED)}
          >
            Joined
          </Button>
          <Button
            type="text"
            onClick={() => handleChangeStatus(user.key, ACTIVITY_PARTICIPANT_STATUS.COMPLETED)}
          >
            Completed
          </Button>
          <Button
            type="text"
            onClick={() => handleChangeStatus(user.key, ACTIVITY_PARTICIPANT_STATUS.DID_NOT_JOIN)}
          >
            Did not join
          </Button>
          <Button type="text" onClick={() => handleRemoveParticipant(user.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
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
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={false}
          className="manage_participant-table"
        />
        <Row justify="space-between" style={{ marginTop: '20px' }}>
          <Col>
            <Button type="primary">Add participant</Button>
          </Col>
          <Col>
            <Button type="primary">Save</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
