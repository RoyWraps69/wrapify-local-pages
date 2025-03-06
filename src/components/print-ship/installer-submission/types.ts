
export interface SubmissionFormData {
  businessName: string;
  contactName: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  specialties: string;
  experience: string;
  message: string;
}

export const initialFormData: SubmissionFormData = {
  businessName: '',
  contactName: '',
  city: '',
  state: '',
  address: '',
  phone: '',
  email: '',
  website: '',
  specialties: '',
  experience: '',
  message: ''
};
