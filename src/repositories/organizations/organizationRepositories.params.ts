export interface OrganizationParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  type: string;
  otherType?: string;
  missionStatement: string;
  address: string;
  city: string;
  stateProvince: string;
  zipPostalCode: string;
  country: string;
}
