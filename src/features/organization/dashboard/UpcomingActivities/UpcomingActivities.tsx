import { Button, List } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleNavigateToActivityDetails = (activityId: string) => {
    navigate(`/activity/details/${activityId}`);
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={data.content}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Button
              key={`view_details_${item.id}`}
              onClick={() => handleNavigateToActivityDetails(item.id)}
            >
              View details
            </Button>,
          ]}
        >
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>
      )}
    />
  );
}
