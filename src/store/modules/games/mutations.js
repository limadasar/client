export default {
  SOCKET_sendPlay(state, payload) {
    state.game = payload;
    state.play = true;
  },
  setPlay(state) {
    state.play = true;
  },
  setAnswers(state, payload) {
    payload.forEach((data) => {
      state.answers.push(data.answer.toLowerCase());
    });
  },
  removeAnswers(state) {
    state.answers = [];
  },
};
