export interface Job {
  id: number;
  img: string;
  title: string;
  organization: string;
  degree: string;
  jobType: string;
  locations: string[];
  minimumQualifications: string[];
  preferedQualifications: string[];
  description: string[];
  dateAdded: string;
}
