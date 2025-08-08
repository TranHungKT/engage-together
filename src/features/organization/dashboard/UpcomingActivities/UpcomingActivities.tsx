import React from 'react';
import { Button, List } from 'antd';
import { useParams } from 'react-router-dom';
import { useSuspenseSearchActivity } from '@/queries/activity.query';

export default function UpcomingActivities() {
  const { id } = useParams();
  const { data } = useSuspenseSearchActivity({
    organizationId: id || '',
    title: '',
    pagination: {
      pageNumber: 1,
      pageSize: 10,
      sortOrder: 'asc',
    },
  });

  return (
    <List
      itemLayout="horizontal"
      dataSource={data.content}
      renderItem={(item) => (
        <List.Item actions={[<Button key={`view_details_${item.id}`}>View details</Button>]}>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  );
}
