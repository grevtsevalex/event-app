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
            path: '/auth',
            component: () => import('./pages/Auth.vue')
        },
        {
            path: '/register',
            component: () => import('./pages/Register.vue')
        },
        {
            path: '/create-event',
            component: () => import('./pages/CreateEvent.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./pages/404.vue')
        }
    ],
})