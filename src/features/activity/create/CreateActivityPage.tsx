import React, { useState } from 'react';

import { Col, Form, Row, Input, DatePicker, Button, Typography, Select, InputNumber } from 'antd';
import dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';

import {
  addressValidation,
  adminUsersValidation,
  categoryValidation,
  cityValidation,
  datePickerValidation,
  descriptionValidation,
  maxAttendeesValidation,
  postalCodeValidation,
  stateProvinceValidation,
  titleValidation,
} from './helper/validation';
import { ICreateActivityForm } from './interfaces';
import RequirementsSelection from './Requirements/RequirementsSelection';
import FormLabel from '@/components/FormLabel/FormLabel';
import { useErrorModal } from '@/components/modal/useErrorModal';
import { CategoryOptions } from '@/constants/activity.constant';
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
        startDateTime: new Date(values.rangeTime[0]),
        endDateTime: new Date(values.rangeTime[1]),
        requirements: values.requirements,
        adminUsers: values.adminUsers,
        maxAttendees: values.maxAttendees,
        activityCategories: values.activityCategories,
        address: values.address,
        city: values.city,
        postalCode: values.postalCode,
        country: values.city,
        stateProvince: values.stateProvince,
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
          <Item
            name="rangeTime"
            label={<FormLabel label="Select date time" />}
            rules={datePickerValidation}
          >
            <RangePicker
              id={{
                start: 'startInput',
                end: 'endInput',
              }}
              showTime
              size="large"
              minDate={dayjs()}
            />
          </Item>
          <Item name="address" label={<FormLabel label="Address" />} rules={addressValidation}>
            <Input size="large" placeholder="E.g. 100 Nguyen Hue" />
          </Item>
          <Row justify="space-between" gutter={[0, 0]}>
            <Col span={11}>
              <Item
                name="stateProvince"
                label={<FormLabel label="State/Province" />}
                rules={stateProvinceValidation}
              >
                <Input size="large" placeholder="CA" />
              </Item>
            </Col>
            <Col span={11}>
              <Item name="city" label={<FormLabel label="City" />} rules={cityValidation}>
                <Input size="large" placeholder="Ho Chi Minh city" />
              </Item>
            </Col>
          </Row>

          <Row justify="space-between" gutter={[0, 0]}>
            <Col span={11}>
              <Item
                name="postalCode"
                label={<FormLabel label="Postal Code" />}
                rules={postalCodeValidation}
              >
                <Input size="large" placeholder="70000" />
              </Item>
            </Col>
            <Col span={11}>
              <Item name="country" label={<FormLabel label="Country" />}>
                <Input size="large" placeholder="Viet Nam" />
              </Item>
            </Col>
          </Row>
          <Item
            name="requirements"
            label={<FormLabel label="Requirements" />}
            // rules={requirementsValidation}
          >
            <RequirementsSelection />
          </Item>
          <Item
            name="adminUsers"
            label={<FormLabel label="Select admin users" />}
            rules={adminUsersValidation}
          >
            <Select mode="multiple" allowClear options={userAdminOptions} />
          </Item>
          <Item
            name="activityCategories"
            label={<FormLabel label="Select category" />}
            rules={categoryValidation}
          >
            <Select mode="multiple" allowClear options={CategoryOptions} />
          </Item>
          <Item
            name="maxAttendees"
            label={<FormLabel label="Participant limit" />}
            rules={maxAttendeesValidation}
          >
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
