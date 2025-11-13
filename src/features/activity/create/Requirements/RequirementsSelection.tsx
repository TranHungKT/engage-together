import { Cascader } from 'antd';

import { RequirementKeys, RequirementsSkills } from './requirements';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const requirements = Object.entries(RequirementsSkills).map<Option>(([key, values]) => ({
  value: key,
  label: RequirementKeys?.[key as keyof typeof RequirementKeys] as string,
  children: values.map((value) => ({
    value: value,
    label: RequirementKeys?.[value as keyof typeof RequirementKeys] as string,
  })),
}));

export default function RequirementsSelection() {
  return <Cascader options={requirements} multiple placeholder="Please select" />;
}
