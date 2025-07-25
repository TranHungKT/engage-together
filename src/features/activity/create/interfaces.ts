export interface ICreateActivityForm {
  title: string;
  description: string;
  address: string;
  city: string;
  zipCode: string;
  rangeTime: string[];
  requirements: any[];
  status: string;
}

export interface ICreateActivity {
  organizationId: string;
  title: string;
  description: string;
  address: string;
  city: string;
  zipCode: string;
  startDateTime: Date;
  endDateTime: Date;
  requirements: string[];
  status: string;
}
