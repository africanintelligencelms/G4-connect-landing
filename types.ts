
export enum RegistrationCategory {
  FOOTBALL = 'Football Tournament',
  VOLLEYBALL = 'Volleyball Tournament',
  CHESS = 'Chess Tournament',
  AWARDS_NIGHT = 'Awards Night',
  VENDOR = 'Vendor Registration',
  SPONSOR = 'Sponsorship Registration',
  SIDE_ATTRACTIONS = 'Side Attractions Participation',
}

export interface FormData {
  fullName: string;
  phone: string;
  email: string;
  category: RegistrationCategory;
  teamName: string;
  participants: number;
}
