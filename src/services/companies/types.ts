import { Job } from '../jobs/types';

export interface Company {
  id: number;
  name: string;
  jobs?: Job[];
  jobCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CompaniesSearchResult {
  count: number;
  companies: Company[];
}

export interface CompaniesSearchQueryParam {
  keyword?: string;
  limit?: number;
  offset?: number;
}
