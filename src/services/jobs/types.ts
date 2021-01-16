import { Company } from '../companies/types';

export interface Job {
  id: number;
  company?: Company;
  companyId?: number;
  jobTitle: string;
  logoUrl: string;
  date: string;
  createdAt: string;
  updatedAt: string;
}

export interface JobsSearchResult {
  count: number;
  jobs: Job[];
}

export interface JobsSearchQueryParams {
  keyword?: string;
  limit?: number;
  offset?: number;
}
