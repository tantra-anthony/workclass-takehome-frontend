import { toQueryString } from '../../utils/common';
import { get } from '../http';
import { Job, JobsSearchQueryParams, JobsSearchResult } from './types';

export async function requestSearchJobs(
  query: JobsSearchQueryParams,
): Promise<JobsSearchResult> {
  const qstring = toQueryString(query);
  return (await get<JobsSearchResult>(`jobs/search${qstring}`)).data;
}

export async function requestFetchJobById(id: string): Promise<Job> {
  return (await get<Job>(`jobs/${id}`)).data;
}
