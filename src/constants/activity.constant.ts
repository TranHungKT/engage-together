export const CategoryOptions = [
  { label: 'Environmental Cleanup', value: 'ENVIRONMENTAL_CLEANUP' },
  { label: 'Blood Donation Drives', value: 'BLOOD_DONATION_DRIVES' },
  { label: 'Community Support', value: 'COMMUNITY_SUPPORT' },
  { label: 'Animal Welfare', value: 'ANIMAL_WELFARE' },
  { label: 'Health and Wellness Support', value: 'HEALTH_AND_WELLNESS_SUPPORT' },
  { label: 'Education and Tutoring', value: 'EDUCATION_AND_TUTORING' },
  { label: 'Disaster Relief', value: 'DISASTER_RELIEF' },
  { label: 'Senior Citizen Support', value: 'SENIOR_CITIZEN_SUPPORT' },
  { label: 'Fundraising Events', value: 'FUNDRAISING_EVENTS' },
  { label: 'Cultural and Inclusion Activities', value: 'CULTURAL_AND_INCLUSION_ACTIVITIES' },
  { label: 'Youth Empowerment', value: 'YOUTH_EMPOWERMENT' },
  { label: 'Homeless Support', value: 'HOMELESS_SUPPORT' },
  { label: 'Advocacy and Awareness Campaigns', value: 'ADVOCACY_AND_AWARENESS_CAMPAIGNS' },
  { label: 'Accessibility and Disability Support', value: 'ACCESSIBILITY_AND_DISABILITY_SUPPORT' },
  { label: 'Community Gardening', value: 'COMMUNITY_GARDENING' },
  { label: 'Recycling and Waste Management', value: 'RECYCLING_AND_WASTE_MANAGEMENT' },
  {
    label: 'Peace building and Conflict Resolution',
    value: 'PEACEBUILDING_AND_CONFLICT_RESOLUTION',
  },
  {
    label: 'Public Safety and Emergency Preparedness',
    value: 'PUBLIC_SAFETY_AND_EMERGENCY_PREPAREDNESS',
  },
  { label: 'Arts for Social Impact', value: 'ARTS_FOR_SOCIAL_IMPACT' },
  { label: 'Miscellaneous Volunteer Activities', value: 'MISCELLANEOUS_VOLUNTEER_ACTIVITIES' },
];

export enum ACTIVITY_STATUS {
  DRAFT = 'DRAFT',
  UPCOMING = 'UPCOMING',
  STARTED = 'STARTED',
  COMPLETED = 'COMPLETED',
  ABORTED = 'ABORTED',
}
