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
            component: () => import('./pages/Profile.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/auth',
            component: () => import('./pages/Auth.vue')
        },
        {
            path: '/register',
            component: () => import('./pages/Register.vue'),
        },
        {
            path: '/create-event',
            component: () => import('./pages/CreateEvent.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/event/:id',
            component: () => import('./pages/EventCard.vue'),
        },
        {
            path: '/edit-event/:id',
            component: () => import('./pages/EditEvent.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/my-events',
            component: () => import('./pages/MyEvents.vue'),
            meta: { requiresAuth: true }
        },
        {
            path: '/:pathMatch(.*)*',
            component: () => import('./pages/404.vue')
        }
    ],
})