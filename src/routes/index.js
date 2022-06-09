// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// layouts
import { HeaderOnly } from '~/components/Layout';
import routeConfig from '~/config/routes';

// public routes
const publicRoutes = [
  { path: routeConfig.home, component: Home },
  { path: routeConfig.following, component: Following },
  { path: routeConfig.profile, component: Profile },
  { path: routeConfig.upload, component: Upload, layout: HeaderOnly },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
