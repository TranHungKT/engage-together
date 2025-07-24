import React from 'react';
import { List, Image } from 'antd';
import { useParams } from 'react-router-dom';
import imagePng from '../../../../images/opportunity.png';
import { useSearchOpportunities } from '@/queries/opportunities.query';
export default function TopOpportunitiesContainer() {
  const { id } = useParams();
  const { data } = useSearchOpportunities({
    organizationId: id || '',
    pagination: {
      pageNumber: 1,
      pageSize: 3,
    },
  });

  return (
    <List
      itemLayout="horizontal"
      dataSource={data.content}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={item.title}
            description={item.description}
            avatar={<Image src={imagePng} width={438} height={242} />}
          />
        </List.Item>
      )}
    />
  );
}
