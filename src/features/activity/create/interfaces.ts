export interface ICreateActivityForm {
  title: string;
  description: string;
  address: string;
  city: string;
  zipCode: string;
  rangeTime: string[];
  requirements: any[];
  status: string;
  adminUsers: string[];
  maxAttendees: number;
  activityCategories: string[];
}
