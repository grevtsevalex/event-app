import store from "./store";
import('./bootstrap');

import { createApp } from 'vue';
import app from './components/app.vue';
import router from './router';
import '../css/app.css';

// Проверка маршрутов
router.beforeEach((to, from, next) => {
    if (!store.getters.isInitialized) {
        // Если состояние ещё не инициализировано, подождём
        store.watch(
            (state) => state.initialized,
            (initialized) => {
                if (initialized) {
                    handleRoute(to, from, next);
                }
            }
        );
    } else {
        handleRoute(to, from, next);
    }
});

// Обработчик маршрутов
function handleRoute(to, from, next) {
    const isAuthenticated = store.getters.getIsAuthenticated;

    // Если пользователь авторизован, но пытается зайти на `/auth`, перенаправляем на `/profile`
    if (to.path === '/auth' && isAuthenticated) {
        next('/profile');
        return;
    }

    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({
                path: '/auth',
                params: { nextUrl: to.fullPath },
            });
        } else {
            next();
        }
    } else {
        next();
    }
}

// Инициализация приложения
store.dispatch('initializeAuth').then(() => {
    createApp(app).use(router).use(store).mount("#app");
});