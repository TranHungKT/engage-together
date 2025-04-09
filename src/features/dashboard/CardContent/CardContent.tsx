import React from 'react';

import { Card, Typography } from 'antd';

const { Title, Text } = Typography;

interface CardContentProps {
  cardNumber: number;
  content: string;
}

export default function CardContent({ cardNumber, content }: CardContentProps) {
  return (
    <Card style={{ textAlign: 'center' }}>
      <Title level={3} style={{ margin: 0 }}>
        {cardNumber}
      </Title>
      <Text type="secondary">{content}</Text>
    </Card>
  );
}
