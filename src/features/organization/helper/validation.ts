import { Rule } from 'antd/es/form';
import { NamePath, StoreValue } from 'antd/es/form/interface';

import {
  EMAIL_PATTERN,
  NORMAL_CHARACTER_PATTERN,
  PASSWORD_PATTERN,
  PHONE_NUMBER_PATTERN,
} from '@/helper/regex';

export const organizationNameValidation: Rule[] = [
  { required: true, message: 'Organization Name is required.' },
  {
    max: 100,
    message: 'Organization Name must be 100 characters or less.',
  },
  {
    pattern: NORMAL_CHARACTER_PATTERN,
    message: 'Organization Name can only contain letters, numbers, hyphens, and apostrophes.',
  },
];

export const organizationEmailValidation: Rule[] = [
  { required: true, message: 'Organization Email is required.' },
  {
    pattern: EMAIL_PATTERN,
    message: 'Please enter a valid email address.',
  },
];

export const organizationAddressValidation: Rule[] = [
  { required: true, message: 'Organization Address is required.' },
  {
    max: 255,
    message: 'Address must be 255 characters or less.',
  },
  {
    pattern: NORMAL_CHARACTER_PATTERN,
    message:
      'Address can only contain letters, numbers, spaces, commas, periods, hyphens, and apostrophes.',
  },
];

export const contactPersonPhoneValidation: Rule[] = [
  { required: true, message: 'Contact Person Phone is required.' },
  {
    pattern: PHONE_NUMBER_PATTERN,
    message: 'Please enter a valid phone number.',
  },
];

export const contactPersonEmailValidation: Rule[] = [
  { required: true, message: 'Contact Person Email is required.' },
  {
    pattern: EMAIL_PATTERN,
    message: 'Please enter a valid email address.',
  },
];

export const missionStatementValidation: Rule[] = [
  {
    max: 500,
    message: 'Mission Statement must be 500 characters or less.',
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

export const passwordValidation: Rule[] = [
  {
    required: true,
    message: 'Password is required.',
  },
  {
    min: 8,
    message: 'Password must be at least 8 characters long.',
  },
  {
    pattern: PASSWORD_PATTERN,
    message:
      'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.',
  },
];

export const confirmPasswordValidation: Rule[] = [
  {
    required: true,
    message: 'Confirm Password is required.',
  },
  ({ getFieldValue }: { getFieldValue: (name: NamePath<string>) => StoreValue }) => ({
    validator(_, value: string) {
      if (!value || getFieldValue('password') === value) {
        return Promise.resolve();
      }
      return Promise.reject(new Error('The new password that you entered do not match!'));
    },
  }),
];

export const organizationTypeValidation: Rule[] = [
  {
    required: true,
    message: 'Organization Type is required.',
  },
];
