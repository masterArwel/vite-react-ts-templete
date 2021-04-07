
import Index from '@/pages/Index';
import About from '@/pages/About';


const routes = [
  {
    path: '/',
    component: Index,
  },
  {
    path: '/about',
    component: About,
    routes: [
      
    ],
  },
];

export default routes;
