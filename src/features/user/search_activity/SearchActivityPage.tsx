import React from 'react';
import { Avatar, Button, List, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useSuspenseSearchActivity } from '@/queries/activity.query';

export default function SearchActivityPage() {
  const { data } = useSuspenseSearchActivity({
    pagination: {
      pageNumber: 1,
      pageSize: 10,
    },
  });

  const navigate = useNavigate();

  return (
    <>
      <Typography.Title>Find Volunteer Opportunities</Typography.Title>
      <List
        pagination={{ align: 'end' }}
        dataSource={data.content}
        renderItem={(item, index) => (
          <List.Item
            actions={[
              <Button key={item.id} onClick={() => navigate(`/activity/details/${item.id}`)}>
                View Details
              </Button>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={item.title}
              description={item.description}
            />
          </List.Item>
        )}
      ></List>
    </>
  );
}
