import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    name: null,
    users: [],
  },
  actions,
  getters,
  mutations,
};
