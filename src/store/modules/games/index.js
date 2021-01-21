import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    play: false,
    players: [],
    roomMaster: null,
  },
  actions,
  getters,
  mutations,
};
