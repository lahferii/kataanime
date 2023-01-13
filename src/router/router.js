import { createRouter, createWebHistory } from "vue-router";
import homePage from '../views/homePage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: homePage
	},
	{
		path: '/explore',
		name: 'explore',
		component: () => import('../views/explorePage.vue'),
	}
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router