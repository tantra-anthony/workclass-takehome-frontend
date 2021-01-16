import { FunctionComponent, ComponentClass } from 'react';
import { Home, JobList, CompanyList } from '../screens';

type RouteType = {
  key: string;
  path?: string;
  link?: string;
  component: FunctionComponent<any> | ComponentClass<any, any>;
  exact?: boolean;
};

export const routes: RouteType[] = [
  {
    key: 'home',
    link: '/',
    component: Home,
    exact: true,
  },
  {
    key: 'jobs',
    link: '/jobs',
    component: JobList,
  },
  {
    key: 'companies',
    link: '/companies',
    component: CompanyList,
  },
];
