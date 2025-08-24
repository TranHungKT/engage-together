import { PaginationRequest, PaginationResponse } from '@/models/query.models';

export interface SearchActivityRequest {
  organizationId: string;
  title?: string;
  pagination: PaginationRequest;
}

export type SearchActivityResponse = {
  data: PaginationResponse<{
    id: string;
    title: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
    maxAttendees: number;
    organizationId: string;
    organization: OrganizationResponse;
    categories: CategoriesResponse;
  }>;
};

export interface OrganizationResponse {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  type: string;
  otherType: string;
  address: string;
  city: string;
  stateProvince: string;
  zipPostalCode: string;
  country: string;
}

export interface CategoriesResponse {
  id: {
    categoryKey: string;
    activityId: string;
  };
}

export type CreateActivityRequest = {
  organizationId: string;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  requirements: string[];
  adminUsers: string[];
  maxAttendees: number;
  activityCategories: string[];
  address: string;
  city: string;
  postalCode: string;
  country: string;
  stateProvince: string;
};

export interface GetActivityDetailsRequest {
  activityId: string;
}

export interface GetActivityDetailsResponse {
  data: {
    id: string;
    title: string;
    description: string;
    startDateTime: string;
    endDateTime: string;
    address: string;
    stateProvince: string;
    city: string;
    postalCode: string;
    country: string;
    users: Participant[];
    categories: string[];
  };
}

interface Participant {
  userId: string;
  name: string;
  username: string;
  email: string;
  userRoleInActivity: string;
}
