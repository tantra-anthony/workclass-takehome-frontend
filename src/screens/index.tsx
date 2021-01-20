import Loadable from 'react-loadable';
import Loader from './Loader';

const Home = Loadable({
  loader: () => import('./Home'),
  loading: Loader,
});

const JobList = Loadable({
  loader: () => import('./JobList'),
  loading: Loader,
});

const CompanyList = Loadable({
  loader: () => import('./CompanyList'),
  loading: Loader,
});

const CompanyDetail = Loadable({
  loader: () => import('./CompanyDetail'),
  loading: Loader,
});

export { Home, JobList, CompanyList, CompanyDetail };
