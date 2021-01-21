import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    rooms: [],
    room: {},
  },
  actions,
  getters,
  mutations,
};
