export interface IOrganizationRegistration {
  organizationName: string;
  organizationEmail: string;
  organizationPhoneNumber: string;
  organizationAddress: string;
  organizationType: string;
  otherOrganizationType: string;
  missionStatement: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  password: string;
  confirmPassword: string;
  agreeWithTerm: boolean;
}
