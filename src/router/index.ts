import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

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
    const RouteStages = RouteFragments.length;
    let PathString = '';
    const FileName = RouteFragments[RouteStages - 1].split('.').slice(0, -1).join('.');
    RouteFragments.forEach((stage, i) => {
      if (i !== 0 && i !== RouteStages - 1) {
        PathString = `${PathString}/${stage}`;
      } else if (i === RouteStages - 1) {
        PathString = `${PathString}/${FileName}`;
      }
    });
    const newRoute = {
      path: PathString.toLowerCase(),
      name: FileName,
      meta: { stages: PathString },
      component: () => import(`../stories${PathString}.vue`),
    };
    routes.push(newRoute);
  });
} buildRouteObjects();

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
