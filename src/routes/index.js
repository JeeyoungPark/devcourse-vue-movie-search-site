import { createRouter, createWebHistory } from 'vue-router';
import Content from './Content';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Content,
    }
  ]
});
