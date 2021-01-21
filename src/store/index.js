import Vue from 'vue';
import Vuex from 'vuex';
import usersModule from './modules/users/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users: usersModule,
  },
});
