import { PaginationResponse } from '@/models/pagination.models';

export interface Pagination {
  pageNumber: number;
  pageSize: number;
}

export interface SearchOpportunityParams {
  organizationId: string;
  title?: string;
  pagination: Pagination;
}

export interface SearchOpportunityContentResponse {
  id: string;
  organizationId: string;
  title: string;
  description: string;
  startDateTime: Date;
  endDateTime: Date;
  createdBy: string;
  createdDt: Date;
  updatedBy: string;
  updatedDt: Date;
}

export type SearchOpportunityResponse = PaginationResponse<SearchOpportunityContentResponse>;
