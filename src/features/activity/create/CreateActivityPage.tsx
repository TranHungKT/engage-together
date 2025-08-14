import React, { useState } from 'react';

import { Col, Form, Row, Input, DatePicker, Button, Typography, Select, InputNumber } from 'antd';

import { useNavigate, useParams } from 'react-router-dom';
import { CategoryOptions } from './constants';
import { cityValidation, descriptionValidation, titleValidation } from './helper/validation';
import { ICreateActivityForm } from './interfaces';
import RequirementsSelection from './Requirements/RequirementsSelection';
import FormLabel from '@/components/FormLabel/FormLabel';
import { useErrorModal } from '@/components/modal/useErrorModal';
import { QueryError } from '@/models/query.models';
import { useCreateActivityMutation } from '@/queries/activity.query';
import { useSearchUser } from '@/queries/users.query';

const { Item } = Form;
const { TextArea } = Input;
const { RangePicker } = DatePicker;
const { Title } = Typography;

export default function CreateActivityPage() {
  const [form] = Form.useForm<ICreateActivityForm>();

  const mutation = useCreateActivityMutation();

  const { organizationId } = useParams();

  const { data } = useSearchUser({ organizationId: organizationId || '', username: '' });

  const navigate = useNavigate();

  const [error, setError] = useState('');

  const [showModal] = useErrorModal(
    {
      message: error,
    },
    [error],
  );

  const userAdminOptions = data.map((user) => ({
    label: user.name,
    value: user.id,
  }));

  const handleSubmit = (values: ICreateActivityForm) => {
    mutation.mutate(
      {
        organizationId: organizationId || '',
        title: values.title,
        description: values.description,
        address: values.address,
        city: values.city,
        zipCode: values.zipCode,
        startDateTime: new Date(values.rangeTime[0]),
        endDateTime: new Date(values.rangeTime[1]),
        requirements: values.requirements,
        status: 'ACTIVE',
        adminUsers: values.adminUsers,
        maxAttendees: values.maxAttendees,
        activityCategories: values.activityCategories,
      },
      {
        onSuccess: () => {
          navigate(`/organization/dashboard/${organizationId}`);
        },
        onError: (queryError) => {
          setError((queryError as QueryError)?.response.data.message);
          showModal();
        },
      },
    );
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
          <Item name="adminUsers" label={<FormLabel label="Select admin users" />}>
            <Select mode="multiple" allowClear options={userAdminOptions} />
          </Item>
          <Item name="activityCategories" label={<FormLabel label="Select category" />}>
            <Select mode="multiple" allowClear options={CategoryOptions} />
          </Item>
          <Item name="maxAttendees" label={<FormLabel label="Participant limit" />}>
            <InputNumber style={{ width: '100%' }} />
          </Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
