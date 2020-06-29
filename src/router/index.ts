import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Store from '@/store/index';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
];

const stories = require.context(
  '@/stories/',
  true,
  /^.*\.vue$/,
);

function buildRouteObjects() {
  stories.keys().forEach((file) => {
    const RouteFragments = file.split('/');
    RouteFragments.shift();
    const RouteStages = RouteFragments.length;
    const FileName = RouteFragments[RouteStages - 1].split('.').slice(0, -1).join('.');
    let PathString = '';
    RouteFragments.forEach((stage, i) => {
      if (i !== RouteStages - 1) {
        PathString = `${PathString}/${stage}`;
      } else if (i === RouteStages - 1) {
        PathString = `${PathString}/${FileName}`;
      }
    });
    const newRoute = {
      path: PathString.toLowerCase(),
      name: FileName,
      meta: { stages: RouteFragments },
      component: () => import(`../stories${PathString}.vue`),
    };
    Store.dispatch('updateStoryItems', newRoute);
    routes.push(newRoute);
  });
} buildRouteObjects();

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
