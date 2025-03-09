
export interface GalleryItem {
  image: string;
  title: string;
  category: string;
  serviceLink?: string;
  isCustomerSubmission?: boolean;
  customerName?: string;
  location?: string;
}

export interface GalleryFilterProps {
  activeFilter: string | null;
  setActiveFilter: (filter: string | null) => void;
  filters: Array<{ id: string | null; name: string }>;
}

export interface GalleryItemProps {
  item: GalleryItem;
}

export interface GalleryGridProps {
  items: GalleryItem[];
}

export interface GalleryShowcaseProps {
  townName?: string;
  itemLimit?: number;
}

export interface PhotoSubmissionCTAProps {
  className?: string;
}
