import api from '@/api/api';

export default {
  game(state) {
    return state.game;
  },
  setPlay(context) {
    context.commit('setPlay');
  },
  async getAnswers(context, payload) {
    try {
      const res = await api({
        url: `/Hewan/${payload}`,
        method: 'get',
      });

      context.commit('setAnswers', res.data);
    } catch (err) {
      console.log(err);
    }
  },
};
