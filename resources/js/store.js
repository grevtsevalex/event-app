import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            isAuthenticated: false,
            userId: null,
        }
    },
    mutations: {
        setIsAuthenticated (state, flag) {
            state.isAuthenticated = flag
        },
        setUserId(state, userId) {
            state.userId = userId
        }
    },
    getters: {
        getIsAuthenticated (state) {
            return state.isAuthenticated
        },
        getUserId(state) {
            return state.userId
        }
    },
})