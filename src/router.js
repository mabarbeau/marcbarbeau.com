import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/:slug',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 84 },
      };
    }
    return { x: 0, y: 0 };
  },
});
