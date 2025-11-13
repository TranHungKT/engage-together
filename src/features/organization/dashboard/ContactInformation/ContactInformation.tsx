import { Col, Row, Splitter, Typography } from 'antd';

import ContactSection from './ContactSection/ContactSection';

interface ContactInformationProps {
  email: string;
  phoneNumber: string;
  address: string;
}

export default function ContactInformation({
  email,
  phoneNumber,
  address,
}: ContactInformationProps) {
  return (
    <>
      <Row>
        <Col>
          <Row>
            <Typography.Title level={3}>Contact Information</Typography.Title>
          </Row>
        </Col>
      </Row>
      <Splitter layout="vertical">
        <Splitter.Panel resizable={false}>
          <ContactSection sectionName="Email" sectionValue={email} />
        </Splitter.Panel>
        <Splitter.Panel resizable={false}>
          <ContactSection sectionName="Phone" sectionValue={phoneNumber} />
        </Splitter.Panel>
        <Splitter.Panel resizable={false}>
          <ContactSection sectionName="Address" sectionValue={address} />
        </Splitter.Panel>
      </Splitter>
    </>
  );
}
