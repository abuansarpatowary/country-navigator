import { createRouter, createWebHistory } from "vue-router";

const Home = () => import("../views/Home.vue");

const routes = [
	{ path: "/", component: Home },
	{ path: "/about", component: () => import("../views/About.vue") },
	{ path: "/countries", component: () => import("../views/Countries.vue") },
	{ path: "/countries/:id", component: () => import("../views/Country.vue") },
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
