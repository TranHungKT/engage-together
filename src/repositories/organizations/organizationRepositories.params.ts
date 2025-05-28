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

export interface GetOrganizationSummaryParams {
  organizationId: string;
}

export interface GetOrganizationSummaryResponse {
  data: {
    numberOfActiveOpportunity: number;
    numberOfUpcomingOpportunity: number;
    totalVolunteers: number;
    totalOpportunities: number;
  };
}
