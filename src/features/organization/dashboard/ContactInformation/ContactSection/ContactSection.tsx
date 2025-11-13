import { Flex, Typography } from 'antd';

interface ContactSectionProps {
  sectionName: string;
  sectionValue: string;
}

export default function ContactSection({ sectionName, sectionValue }: ContactSectionProps) {
  return (
    <Flex justify="flex-start" align="flex-start" vertical>
      <Typography.Title type="secondary" level={5}>
        {sectionName}
      </Typography.Title>
      <Typography.Text>{sectionValue}</Typography.Text>
    </Flex>
  );
}
