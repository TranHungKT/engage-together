import React from 'react';

import { Form, FormInstance, Input, Select } from 'antd';

import FormLabel from '../FormLabel/FormLabel';
import { IOrganizationRegistration } from '../interfaces';
const { Item } = Form;
const { Option } = Select;

interface OrganizationTypeProps {
  form: FormInstance<IOrganizationRegistration>;
}

export default function OrganizationType({ form }: OrganizationTypeProps) {
  const handleOrganizationTypeChange = (value: string) => {
    form.setFieldValue('organizationType', value);
  };

  return (
    <>
      <Item
        name="organizationType"
        label={<FormLabel label="Organization type" />}
        rules={[{ required: true }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={handleOrganizationTypeChange}
          allowClear
          size="large"
        >
          <Option value="Nonprofit">Nonprofit</Option>
          <Option value="Community Group">Community Group</Option>
          <Option value="Educational Institution">Educational Institution</Option>
          <Option value="Religious Organization">Religious Organization</Option>
          <Option value="Health Organization">Health Organization</Option>
          <Option value="Other">Other</Option>
        </Select>
      </Item>
      <Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.organizationType !== currentValues.organizationType
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue('organizationType') === 'Other' ? (
            <Item
              name="otherOrganizationType"
              label={<FormLabel label="Other Organization type" />}
              rules={[{ required: true }]}
            >
              <Input size="large" placeholder="Other" />
            </Item>
          ) : null;
        }}
      </Item>
    </>
  );
}
