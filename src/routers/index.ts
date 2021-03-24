
import Index from '@/pages/Index';
import About from '@/pages/About';
import Test from '@/pages/Test';


const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/about',
    component: About,
    routes: [
      {
        path: '/about/test',
        component: Test,
      },
    ],
  },
];

export default routes;
