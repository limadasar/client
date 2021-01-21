import Vue from 'vue';
import Vuex from 'vuex';
import usersModule from './modules/users/index';
import roomsModule from './modules/rooms/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    users: usersModule,
    rooms: roomsModule,
  },
});
