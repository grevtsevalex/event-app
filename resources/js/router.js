import {createRouter, createWebHistory} from 'vue-router';
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: () => import('./pages/main.vue')
        },
        {
            path: '/profile',
            component: () => import('./pages/profile.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/auth',
            component: () => import('./pages/auth.vue')
        },
        {
            path: '/register',
            component: () => import('./pages/register.vue'),
        },
        {
            path: '/create-event',
            component: () => import('./pages/create-event.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/event/:id',
            component: () => import('./pages/card-event.vue'),
        },
        {
            path: '/edit-event/:id',
            component: () => import('./pages/edit-event.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/my-events',
            component: () => import('./pages/me-events.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./pages/404.vue')
        }
    ],
})