import React from 'react';
import { List, Button, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { FieldType } from '../SearchActivityPage';
import { useSuspenseSearchActivity } from '@/queries/activity.query';

interface SearchResultProps {
  filterData: FieldType;
}

export default function SearchResult({ filterData }: SearchResultProps) {
  const { data } = useSuspenseSearchActivity({
    pagination: {
      pageNumber: 1,
      pageSize: 10,
    },
    title: filterData?.title,
  });
  const navigate = useNavigate();
  return (
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
    />
  );
}
