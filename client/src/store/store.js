import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//export const store = 
export default new Vuex.Store({
    strict: true, // state only modifyable through action or mutations
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false
    },
    mutations: {
        setLogOut(state) {
            state.token = null;
            state.isUserLoggedIn = null;
            state.user = null;
        },
        setToken(state, token) {
            state.token = token;
            state.isUserLoggedIn = !!(token);
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        },
        setUser({ commit }, user) {
            commit('setUser', user)
        }

    }
})