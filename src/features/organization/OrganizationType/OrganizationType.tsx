import React from 'react';

import { Form, FormInstance, Input, Select } from 'antd';

import FormLabel from '../FormLabel/FormLabel';
import { organizationTypeValidation } from '../helper/validation';
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
        rules={organizationTypeValidation}
      >
        <Select
          placeholder="Select a option and change input text above"
          onChange={handleOrganizationTypeChange}
          allowClear
          size="large"
        >
          <Option value="NON_PROFIT">Nonprofit</Option>
          <Option value="COMMUNITY_GROUP">Community Group</Option>
          <Option value="EDUCATIONAL_INSTITUTION">Educational Institution</Option>
          <Option value="RELIGIOUS_ORGANIZATION">Religious Organization</Option>
          <Option value="HEALTH_ORGANIZATION">Health Organization</Option>
          <Option value="OTHER">Other</Option>
        </Select>
      </Item>
      <Item
        noStyle
        shouldUpdate={(prevValues, currentValues) =>
          prevValues.organizationType !== currentValues.organizationType
        }
      >
        {({ getFieldValue }) => {
          return getFieldValue('organizationType') === 'OTHER' ? (
            <Item
              name="otherOrganizationType"
              label={<FormLabel label="Other Organization type" />}
              rules={organizationTypeValidation}
            >
              <Input size="large" placeholder="Other" />
            </Item>
          ) : null;
        }}
      </Item>
    </>
  );
}
