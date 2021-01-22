export default {
  setUser(state, payload) {
    state.user = payload;
  },
  SOCKET_sendUser(state, payload) {
    console.log(payload);
    state.user = payload;
  },
};
