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
    mutation: {
        setToken(state, token) {
            state.token = token;
            state.isUserLoggedIn = token ? true : false;
        },
        setUser(state, user) {
            state.user = user;
        }
    },
    actions: { // async stuff
        setToken({ commit }, token) {
            commit('setToken', token);
        },
        setUser({ commit }, user) {
            commit('setUser', user);
        }
    }
})