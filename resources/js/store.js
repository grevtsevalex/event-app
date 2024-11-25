import { createStore } from 'vuex'
import {AuthApi} from "./api/auth-api";

const store = createStore({
    state () {
        return {
            isAuthenticated: false,
            userId: null,
            token: null,
            initialized: false,
        }
    },
    mutations: {
        setIsAuthenticated (state, flag) {
            state.isAuthenticated = flag
        },
        setUserId(state, userId) {
            state.userId = userId
        },
        setToken(state, token) {
            return state.token = token
        },
        setInitialized(state, initialized) {
            state.initialized = initialized;
        },
    },
    getters: {
        getIsAuthenticated (state) {
            return state.isAuthenticated
        },
        getUserId(state) {
            return state.userId
        },
        getToken(state) {
            return state.token
        },
        isInitialized: (state) => state.initialized,
    },
    actions: {
        async initializeAuth({ commit }) {
            try {
                const isAuthenticated = await new AuthApi().checkAuth();
                commit('setIsAuthenticated', isAuthenticated);
            } catch (error) {
                console.error('Ошибка проверки авторизации:', error);
                commit('setIsAuthenticated', false); // Сбрасываем авторизацию при ошибке
            } finally {
                commit('setInitialized', true);
            }
        },
    },
})

export default store;