
export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  photoUrl?: string;
  source?: 'Google' | 'Yelp' | 'Facebook' | 'Website';
  date?: string;
}
