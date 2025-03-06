
export interface Installer {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  website?: string;
  specialties: string[];
  isOurShop?: boolean;
}
