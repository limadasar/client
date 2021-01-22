import Vue from 'vue';
import Vuex from 'vuex';
import usersModule from './modules/users/index';
import roomsModule from './modules/rooms/index';
import gamesModule from './modules/games/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users: usersModule,
    rooms: roomsModule,
    games: gamesModule,
  },
});
