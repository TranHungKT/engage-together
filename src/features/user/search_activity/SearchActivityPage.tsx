import { Suspense, useState } from 'react';

import { Button, Col, DatePicker, Form, FormProps, Input, Row, Select, Typography } from 'antd';

import SearchResult from './SearchResult/SearchResult';

import LoadingFallback from '@/components/LoadingFallback';
import { ActivityStatusOption, CategoryOptions } from '@/constants/activity.constant';

export type FieldType = {
  title?: string;
  categories?: string[];
  rangePicker?: string;
  statuses?: string[];
};

export default function SearchActivityPage() {
  const [filterData, setFilterData] = useState<FieldType>({});

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    setFilterData(values);
  };

  return (
    <>
      <Typography.Title>Find Volunteer Opportunities</Typography.Title>
      <Form onFinish={onFinish}>
        <Form.Item name="title">
          <Input placeholder="Search activities" />
        </Form.Item>
        <Row gutter={10}>
          <Col span={4}>
            <Form.Item name="categories">
              <Select
                mode="multiple"
                allowClear
                options={CategoryOptions}
                maxTagCount="responsive"
                placeholder="Categories"
              />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="rangePicker">
              <DatePicker.RangePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item name="statuses">
              <Select
                mode="multiple"
                allowClear
                options={ActivityStatusOption}
                maxTagCount="responsive"
                placeholder="Statuses"
              />
            </Form.Item>
          </Col>
        </Row>

        <Button htmlType="submit">Search</Button>
      </Form>

      <Suspense fallback={<LoadingFallback />}>
        <SearchResult filterData={filterData} />
      </Suspense>
    </>
  );
}
