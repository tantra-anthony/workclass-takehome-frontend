import * as qs from 'qs';
import moment from 'moment-timezone';

export function toQueryString(query: any): string {
  return qs.stringify(query, { addQueryPrefix: true });
}

export function formatISODate(date: string, format: string): string {
  return moment(date).format(format);
}
