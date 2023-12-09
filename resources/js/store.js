import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            isAuthenticated: false,
            userId: null,
            token: null,
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
        }
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
        }
    },
})