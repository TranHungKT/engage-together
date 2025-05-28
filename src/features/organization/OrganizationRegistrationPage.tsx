import React, { useState } from 'react';

import { Button, Checkbox, Col, Form, Input, Modal, Row } from 'antd';

import './styles.scss';

import { useNavigate } from 'react-router-dom';

import FormLabel from './FormLabel/FormLabel';
import {
  cityValidation,
  confirmPasswordValidation,
  phoneNumberValidation,
  countryValidation,
  missionStatementValidation,
  organizationAddressValidation,
  organizationEmailValidation,
  organizationNameValidation,
  passwordValidation,
  stateProvinceValidation,
  zipCodeValidation,
} from './helper/validation';
import { IOrganizationRegistration } from './interfaces';
import OrganizationType from './OrganizationType/OrganizationType';
import { useCreateOrganizationMutation } from '@/queries/organizations.query';
const { Item } = Form;
const { TextArea } = Input;

export default function OrganizationRegistrationPage() {
  const [form] = Form.useForm<IOrganizationRegistration>();
  const createOrganizationMutation = useCreateOrganizationMutation();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFinish = (values: IOrganizationRegistration) => {
    createOrganizationMutation.mutate(
      {
        name: values.organizationName,
        email: values.organizationEmail,
        password: values.password,
        confirmPassword: values.confirmPassword,
        phoneNumber: values.organizationPhoneNumber,
        type: values.organizationType,
        otherType: values.otherOrganizationType,
        missionStatement: values.missionStatement,
        address: values.organizationAddress,
        city: values.city,
        zipPostalCode: values.zipCode,
        stateProvince: values.state,
        country: values.country,
      },
      {
        onSuccess: () => {
          navigate('/dashboard');
        },
        onError: (error) => {
          console.log('<< erirr', error);
          showModal();
        },
      },
    );
  };

  return (
    <>
      <Row style={{ marginTop: '3rem' }}>
        <Col span={4} />
        <Col span={8}>
          <Form layout="vertical" form={form} onFinish={handleFinish}>
            <Item
              name="organizationName"
              label={<FormLabel label="Organization name" />}
              rules={organizationNameValidation}
            >
              <Input size="large" placeholder="Acme  Inc." />
            </Item>
            <Item
              name="organizationEmail"
              label={<FormLabel label="Organization email" />}
              rules={organizationEmailValidation}
            >
              <Input size="large" placeholder="organization@gmail.com" />
            </Item>
            <Item
              name="organizationAddress"
              label={<FormLabel label="Address" />}
              rules={organizationAddressValidation}
            >
              <Input size="large" placeholder="123  Main St" />
            </Item>
            <Item
              name="organizationPhoneNumber"
              label={<FormLabel label="Phone number" />}
              rules={phoneNumberValidation}
            >
              <Input size="large" placeholder="+84 123-456-7890" />
            </Item>

            <OrganizationType form={form} />
            <Item
              name="missionStatement"
              label={<FormLabel label="Mission statement" />}
              rules={missionStatementValidation}
            >
              <TextArea autoSize={{ minRows: 5 }} />
            </Item>

            <Row justify="space-between" gutter={[0, 0]}>
              <Col span={11}>
                <Item name="city" label={<FormLabel label="City" />} rules={cityValidation}>
                  <Input size="large" placeholder="San Francisco" />
                </Item>
              </Col>
              <Col span={11}>
                <Item
                  name="state"
                  label={<FormLabel label="State/Province" />}
                  rules={stateProvinceValidation}
                >
                  <Input size="large" placeholder="CA" />
                </Item>
              </Col>
            </Row>

            <Row justify="space-between" gutter={[0, 0]}>
              <Col span={11}>
                <Item
                  name="zipCode"
                  label={<FormLabel label="Zip/Postal Code" />}
                  rules={zipCodeValidation}
                >
                  <Input size="large" placeholder="70000" />
                </Item>
              </Col>
              <Col span={11}>
                <Item
                  name="country"
                  label={<FormLabel label="Country" />}
                  rules={countryValidation}
                >
                  <Input size="large" placeholder="VN" />
                </Item>
              </Col>
            </Row>
            <Item name="password" label={<FormLabel label="Password" />} rules={passwordValidation}>
              <Input.Password
                size="large"
                placeholder="Enter at least 8 characters"
                type="password"
              />
            </Item>
            <Item
              name="confirmPassword"
              label={<FormLabel label="Confirm password" />}
              rules={confirmPasswordValidation}
            >
              <Input.Password
                size="large"
                placeholder="Enter at least 8 characters"
                type="password"
              />
            </Item>

            <Item name="agreeWithTerm" valuePropName="checked">
              <Checkbox required>
                I have read and agree to the Volunteer Terms of Service and Privacy Policy.
              </Checkbox>
            </Item>
            <Item className="organization-registration_submit-button">
              <Button type="primary" htmlType="submit" size="large">
                Create Organization Profile
              </Button>
            </Item>
          </Form>
        </Col>
        <Col />
      </Row>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
