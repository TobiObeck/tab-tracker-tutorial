import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//export const store = 
export default new Vuex.Store({
    strict: true, // state only modifyable through action or mutations
    state: {
        token: null,
        user: null,
        isUserLoggedIn: false,
        count: 0,
        delay: 0
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
        },
        setResetCount(state) {
            state.count = 0;
        },
        setIncrementCountBy(state, change) {
            state.count += change;
        },
        setChangeDelay(state, delay) {
            state.delay = delay;
        }
    },
    actions: {
        setToken({ commit }, token) {
            commit('setToken', token)
        },
        setUser({ commit }, user) {
            commit('setUser', user)
        },
        setIncrementCount({ commit }) {
            const delay = Math.floor(Math.random() * 100) >= 50 ? 2000 * 1 : 0;

            commit('setChangeDelay', delay);

            setTimeout(function () {
                commit('setIncrementCountBy', 1);
            }, delay);
        },
        setDecrementCount({ commit }) {
            const delay = Math.floor(Math.random() * 100) >= 50 ? 2000 * 1 : 0;

            commit('setChangeDelay', delay);

            setTimeout(function () {
                commit('setIncrementCountBy', -1);
            }, delay);
        }
    }
})