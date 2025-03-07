
export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceInfo {
  title: string;
  description: string;
  longDescription: string;
  hero: string;
  benefits: ServiceBenefit[];
  faqs?: FAQ[]; // Added optional faqs property
}
