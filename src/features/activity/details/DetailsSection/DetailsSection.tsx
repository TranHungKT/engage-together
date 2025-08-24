import React from 'react';
import { List, Typography } from 'antd';
import Section from './Section';
import { CategoryOptions } from '@/constants/activity.constant';
import { GetActivityDetailsResponse } from '@/repositories/activities/activityRepositories.params';

type DetailsSectionProps = GetActivityDetailsResponse['data'];

export interface DetailSection {
  label: string;
  value: string | string[];
  isList?: boolean;
  isDateTime?: boolean;
  isText?: boolean;
}

export default function DetailsSection(props: DetailsSectionProps) {
  const { categories, startDateTime, endDateTime, address, users, city, country } = props;

  const admins = users
    .filter((user) => user.userRoleInActivity === 'ADMIN')
    .map((user) => user.username);

  const categoryMap = new Map(CategoryOptions.map((category) => [category.value, category.label]));
  const categoriesMapToValue = categories.map((category) => categoryMap.get(category) || category);

  const options: DetailSection[] = [
    { label: 'Activity Types', value: categoriesMapToValue, isList: true },
    {
      label: 'Start date',
      value: startDateTime,
      isDateTime: true,
    },
    {
      label: 'End date time',
      value: endDateTime,
      isDateTime: true,
    },
    {
      label: 'Location',
      value: [address, city, country],
      isList: true,
    },
    { label: 'Organizer', value: admins, isList: true },
  ];

  return (
    <List
      header={<Typography.Title level={3}>Details</Typography.Title>}
      dataSource={options}
      renderItem={(item) => <Section {...item} />}
    />
  );
}
