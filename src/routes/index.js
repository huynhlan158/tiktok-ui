// pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';

// layouts
import { HeaderOnly } from '~/components/Layout';

// public routes
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
