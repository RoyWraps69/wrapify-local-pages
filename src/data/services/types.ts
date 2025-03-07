
export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceInfo {
  title: string;
  description: string;
  longDescription: string;
  hero: string;
  benefits: ServiceBenefit[];
}
