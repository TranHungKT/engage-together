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
    numberOfActiveActivity: number;
    numberOfUpcomingActivity: number;
    totalVolunteers: number;
    totalActivities: number;
  };
}

export interface OrganizationAdmin {
  adminId: string;
}

export interface GetOrganizationDetailsResponse {
  data: {
    name: string;
    type: string;
    otherType: string;
    admin: OrganizationAdmin[];
    numberOfActivity: number;
    numberOfFollowers: number;
    email: string;
    phoneNumber: string;
    address: string;
  };
}
