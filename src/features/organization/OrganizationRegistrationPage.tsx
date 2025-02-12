import React from 'react';

import { Col, Form, Input, Row, Typography } from 'antd';
import './styles.scss';
const { Item } = Form;

export default function OrganizationRegistrationPage() {
  return (
    <Row style={{ marginTop: '3rem' }}>
      <Col span={4} />
      <Col span={8}>
        <Form layout="vertical">
          <Item
            name="organizationName"
            label={
              <Typography className="organization-registration_label-form">
                Organization name
              </Typography>
            }
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="Acme  Inc." />
          </Item>
          <Item
            name="organizationEmail"
            label={
              <Typography className="organization-registration_label-form">
                Organization email
              </Typography>
            }
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="organization@gmail.com" />
          </Item>
          <Item
            name="contactPersonPhone"
            label={
              <Typography className="organization-registration_label-form">
                Contact person phone
              </Typography>
            }
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="+84 123-456-7890" />
          </Item>
          <Item
            name="contactPersonEmail"
            label={
              <Typography className="organization-registration_label-form">
                Contact person email
              </Typography>
            }
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="person@gmail.com" />
          </Item>
          <Item
            name="organizationAddress"
            label={
              <Typography className="organization-registration_label-form">Address</Typography>
            }
            rules={[{ required: true }]}
          >
            <Input size="large" placeholder="123  Main St" />
          </Item>
        </Form>
      </Col>
      <Col />
    </Row>
  );
}
