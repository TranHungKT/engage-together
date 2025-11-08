import React, { Suspense, useState } from 'react';
import { Button, Form, FormProps, Input, Typography } from 'antd';
import SearchResult from './SearchResult/SearchResult';
import LoadingFallback from '@/components/LoadingFallback';

export type FieldType = {
  title?: string;
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
        <Button htmlType="submit">Search</Button>
      </Form>

      <Suspense fallback={<LoadingFallback />}>
        <SearchResult filterData={filterData} />
      </Suspense>
    </>
  );
}
