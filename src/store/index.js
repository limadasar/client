import Vue from 'vue';
import Vuex from 'vuex';
import usersModule from './modules/users/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: '',
  },
  mutations: {
    addUser(state, payload) {
      state.user = payload;
      localStorage.setItem('user', payload);
    },
  },
  actions: {},
  modules: {
    users: usersModule,
  },
});
