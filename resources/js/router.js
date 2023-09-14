import {createRouter, createWebHistory} from 'vue-router';

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./pages/Main.vue')
        },
        {
            path: '/profile',
            component: () => import('./pages/Profile.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./pages/404.vue')
        }
    ],
})