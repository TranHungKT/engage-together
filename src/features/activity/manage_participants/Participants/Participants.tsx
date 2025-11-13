import { Button, Space, Table, TableProps, Typography } from 'antd';
import { startCase, toLower } from 'lodash';

import { DataType } from '../ManageParticipantsPage';

import { ACTIVITY_PARTICIPANT_STATUS } from '@/constants/activity.constant';

export interface ParticipantsProps {
  dataSource: DataType[];
  setDataSource: React.Dispatch<React.SetStateAction<DataType[]>>;
}

export default function Participants({ dataSource, setDataSource }: ParticipantsProps) {
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
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={false}
      className="manage_participant-table"
    />
  );
}
