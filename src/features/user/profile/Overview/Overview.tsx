import React from 'react';
import { Col, Image, List, Row, Typography } from 'antd';
import dayjs from 'dayjs';
import { ACTIVITY_STATUS } from '@/constants/activity.constant';
import { useSuspenseSearchActivity } from '@/queries/activity.query';

interface OverviewProps {
  userId: string;
}

export default function Overview({ userId }: OverviewProps) {
  const { data } = useSuspenseSearchActivity({
    userId,
    pagination: { pageNumber: 1, pageSize: 100, sortOrder: 'asc' },
    statuses: [ACTIVITY_STATUS.UPCOMING, ACTIVITY_STATUS.COMPLETED],
  });

  const upcomingActivities = data.content.filter(
    (activity) => activity.status === ACTIVITY_STATUS.UPCOMING,
  );
  const completedActivities = data.content.filter(
    (activity) => activity.status === ACTIVITY_STATUS.COMPLETED,
  );

  return (
    <div>
      <Row>
        <Typography.Title>Upcoming Activity</Typography.Title>
      </Row>
      <Row>
        <Col span={24}>
          <List
            dataSource={upcomingActivities}
            itemLayout="vertical"
            size="large"
            renderItem={(item) => (
              <List.Item
                key={item.id}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
                style={{ width: '100%' }}
              >
                <List.Item.Meta
                  title={item.title}
                  description={
                    <>
                      <div>{`${item.address}, ${item.city}, ${item.country}`}</div>
                      <div>
                        From: {dayjs(item.startDateTime as string).format('dddd, MMMM DD, YYYY')} -{' '}
                        To: {dayjs(item.endDateTime as string).format('dddd, MMMM DD, YYYY')}
                      </div>
                    </>
                  }
                />
              </List.Item>
            )}
            extra={<Image src="https://picsum.photos/seed/picsum/200/300" />}
          />
        </Col>
      </Row>
      <Row>
        <Typography.Title>Completed Activity</Typography.Title>
      </Row>
      <Row>
        <Col span={24}>
          <List
            dataSource={completedActivities}
            itemLayout="vertical"
            size="large"
            renderItem={(item) => (
              <List.Item
                key={item.id}
                extra={
                  <img
                    width={272}
                    alt="logo"
                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                  />
                }
                style={{ width: '100%' }}
              >
                <List.Item.Meta
                  title={item.title}
                  description={
                    <>
                      {dayjs(item.startDateTime as string).format('dddd, MMMM DD, YYYY')} -{' '}
                      {dayjs(item.endDateTime as string).format('dddd, MMMM DD, YYYY')}
                    </>
                  }
                />
              </List.Item>
            )}
            extra={<Image src="https://picsum.photos/seed/picsum/200/300" />}
          />
        </Col>
      </Row>
    </div>
  );
}
