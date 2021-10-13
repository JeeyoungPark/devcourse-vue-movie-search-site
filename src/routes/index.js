import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home';
import Detail from './Detail';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      name: 'Detail',
      path: '/detail/:id',
      component: Detail
    }
  ]
});
