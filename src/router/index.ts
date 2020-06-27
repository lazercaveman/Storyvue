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
    if (file.includes('/', 2)) {
      const folderName = file.split('.')[1].split('/')[1];
      const fileName = file.split('.')[1].split('/')[2];
      const newRoute = {
        path: `/${folderName}/${fileName}`,
        name: fileName,
        component: () => import(`../stories/${folderName}/${fileName}.vue`),
      };
      routes.push(newRoute);
    } else if (file.includes('/', 1)) {
      const fileName = file.split('.')[1].split('/')[1];
      const newRoute = {
        path: `/${fileName}`,
        name: fileName,
        component: () => import(`../stories/${fileName}.vue`),
      };
      routes.push(newRoute);
    }
  });
} buildRouteObjects();

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
