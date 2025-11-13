import { Col, Row, Tabs, TabsProps } from 'antd';
import { useParams } from 'react-router-dom';

import ContactInformation from './ContactInformation/ContactInformation';
import Header from './Header/Header';
import PastActivities from './PastActivities/PastActivities';
import UpcomingActivities from './UpcomingActivities/UpcomingActivities';

import CardContent from '@/features/dashboard/user/CardContent/CardContent';
import { useGetOrganizationDetails } from '@/queries/organizations.query';

const tabItems: TabsProps['items'] = [
  {
    key: 'Upcoming-activities',
    label: 'Upcoming Activities',
    children: <UpcomingActivities />,
  },
  {
    key: 'Past-activities',
    label: 'Past Activities',
    children: <PastActivities />,
  },
];

export default function OrganizationDashboardPage() {
  const { id } = useParams();
  const { data } = useGetOrganizationDetails({
    organizationId: id || '',
  });

  return (
    <Row justify="center">
      <Col
        xxl={{ span: 16 }}
        xl={{ span: 16 }}
        lg={{ span: 16 }}
        md={{ span: 22 }}
        sm={{ span: 22 }}
        xs={{ span: 22 }}
      >
        <Header organizationDetails={data} />
        <Row gutter={24} align="middle">
          <Col span={8}>
            <CardContent cardNumber={data.numberOfActivity} content="total active activities" />
          </Col>
          <Col span={8}>
            <CardContent cardNumber={data.numberOfFollowers} content="total followers" />
          </Col>
          <Col span={8}>
            <CardContent cardNumber={20} content="upcoming events" />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Tabs items={tabItems} />
          </Col>
        </Row>
        <Row>
          <ContactInformation
            email={data.email}
            phoneNumber={data.phoneNumber}
            address={data.address}
          />
        </Row>
      </Col>
    </Row>
  );
}
