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

export type GetOrganizationDetailsParams = GetOrganizationSummaryParams;

export interface GetOrganizationSummaryResponse {
  data: {
    numberOfActiveOpportunity: number;
    numberOfUpcomingOpportunity: number;
    totalVolunteers: number;
    totalOpportunities: number;
  };
}

export interface OrganizationAdmin {
  id: string;
}

export interface GetOrganizationDetailsResponse {
  data: {
    name: string;
    type: string;
    otherType: string;
    admin: OrganizationAdmin;
    numberOfOpportunity: number;
    numberOfFollowers: number;
  };
}
