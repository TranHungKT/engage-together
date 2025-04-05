import { Rule } from 'antd/es/form';

export const titleValidation: Rule[] = [{ required: true, message: 'Title is required.' }];

export const descriptionValidation: Rule[] = [
  { required: true, message: 'Title is required.' },
  {
    max: 500,
    message: 'Description must be 500 characters or less.',
  },
];

export const cityValidation: Rule[] = [
  {
    required: true,
    message: 'City is required.',
  },
  {
    max: 100,
    message: 'City must be 100 characters or less.',
  },
];

export const zipCodeValidation: Rule[] = [
  {
    required: true,
    message: 'Zip/Postal Code is required.',
  },
  {
    max: 20,
    message: 'Zip/Postal Code must be 20 characters or less.',
  },
];

export const stateProvinceValidation: Rule[] = [
  {
    required: true,
    message: 'State/Province is required.',
  },
];

export const countryValidation: Rule[] = [
  {
    required: true,
    message: 'Country is required.',
  },
];
