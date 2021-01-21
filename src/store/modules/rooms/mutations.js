export default {
  SOCKET_sendRooms(state, payload) {
    console.log(payload);
    state.rooms = payload;
  },
};
