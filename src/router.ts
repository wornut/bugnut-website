import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('./pages/index.vue') }
]

export const routerHistory = createWebHistory();

export const router = createRouter({
    history: routerHistory,
    routes
})