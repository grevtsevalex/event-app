import { createStore } from 'vuex'

export default createStore({
    state () {
        return {
            isAuthenticated: false
        }
    },
    mutations: {
        setIsAuthenticated (state, flag) {
            state.isAuthenticated = flag
        }
    },
    getters: {
        getIsAuthenticated (state) {
            return state.isAuthenticated
        }
    },
})