export interface Section {
  title: string;
  id: string | number;
  items?: {
    title: string;
    id: string | number;
    items?: {
      title: string;
      id: string | number;
      url?: string;
    }[];
    url?: string;
  }[];
  url?: string;
}

