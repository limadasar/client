import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state: {
    game: null,
    play: false,
    answers: [],
  },
  actions,
  getters,
  mutations,
};
