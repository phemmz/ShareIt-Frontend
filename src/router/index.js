import Vue from 'vue';
import Router from 'vue-router';

const Homepage = () => import('@/Pages/Homepage/Homepage');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage,
    },
  ],
});
