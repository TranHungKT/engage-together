export interface ICreateActivityForm {
  title: string;
  description: string;
  rangeTime: string[];
  requirements: any[];
  adminUsers: string[];
  maxAttendees: number;
  activityCategories: string[];
  address: string;
  city: string;
  postalCode: string;
  country: string;
  stateProvince: string;
}
