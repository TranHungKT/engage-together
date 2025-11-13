import { Flex, Typography } from 'antd';
import dayjs from 'dayjs';

import { DetailSection } from './DetailsSection';

export default function Section(props: DetailSection) {
  const renderItemValue = (item: DetailSection) => {
    if (item.isText) {
      return <Typography.Text>{item.value}</Typography.Text>;
    }
    if (item.isDateTime) {
      return (
        <Typography.Text>
          {dayjs(item.value as string).format('dddd, MMMM DD, YYYY')}
        </Typography.Text>
      );
    }

    if (item.isList) {
      return (
        <Typography.Text>
          {(item.value as []).join(', ')} TODO: ADD LINK TO USER LIST
        </Typography.Text>
      );
    }
  };

  return (
    <Flex justify="flex-start" align="flex-start" vertical>
      <Typography.Title type="secondary" level={5}>
        {props.label}
      </Typography.Title>
      {renderItemValue(props)}
    </Flex>
  );
}
