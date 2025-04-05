import React from 'react';

import { Col, Form, Row, Input, DatePicker, Button, Typography } from 'antd';

import { cityValidation, descriptionValidation, titleValidation } from './helper/validation';
import { ICreateOpportunityForm } from './interfaces';
import RequirementsSelection from './Requirements/RequirementsSelection';
import FormLabel from '../organization/FormLabel/FormLabel';

const { Item } = Form;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Title } = Typography;

export default function CreateOpportunityPage() {
  const [form] = Form.useForm<ICreateOpportunityForm>();
  const handleSubmit = (values: ICreateOpportunityForm) => {
    console.log('<<< value', values);
  };

  return (
    <Row>
      <Col span={4} />
      <Col span={8}>
        <Title level={3}>Add new activity</Title>
        <Form layout="vertical" form={form} onFinish={handleSubmit}>
          <Item name="title" label={<FormLabel label="Title" />} rules={titleValidation}>
            <Input size="large" placeholder="E.g. English tutor for kids" />
          </Item>
          <Item
            name="description"
            label={<FormLabel label="Description" />}
            rules={descriptionValidation}
          >
            <TextArea autoSize={{ minRows: 5 }} />
          </Item>
          <Item name="rangeTime" label={<FormLabel label="Select date time" />}>
            <RangePicker
              id={{
                start: 'startInput',
                end: 'endInput',
              }}
              showTime
              size="large"
            />
          </Item>
          <Row justify="space-between" gutter={[0, 0]}>
            <Col span={11}>
              <Item name="city" label={<FormLabel label="City" />} rules={cityValidation}>
                <Input size="large" placeholder="San Francisco" />
              </Item>
            </Col>
            <Col span={11}>
              <Item name="state" label={<FormLabel label="State/Province" />}>
                <Input size="large" placeholder="CA" />
              </Item>
            </Col>
          </Row>

          <Row justify="space-between" gutter={[0, 0]}>
            <Col span={11}>
              <Item name="zipCode" label={<FormLabel label="Zip/Postal Code" />}>
                <Input size="large" placeholder="70000" />
              </Item>
            </Col>
            <Col span={11}>
              <Item name="state" label={<FormLabel label="Country" />}>
                <Input size="large" placeholder="VN" />
              </Item>
            </Col>
          </Row>
          <Item name="requirements" label={<FormLabel label="Requirements" />}>
            <RequirementsSelection />
          </Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
