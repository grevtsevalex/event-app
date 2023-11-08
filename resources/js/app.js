import store from "./store";

import('./bootstrap');

import { createApp }  from 'vue'

import app from './components/app.vue'

import router from './router'
import '../css/app.css'

router.beforeEach((to, from, next) => {
    let isAuthenticated = store.getters.getIsAuthenticated

    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            next({
                path: '/auth',
                params: { nextUrl: to.fullPath }
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

createApp(app).use(router).use(store).mount("#app")