export default {
  SOCKET_sendRooms(state, payload) {
    state.rooms = payload;
  },
  SOCKET_sendRoom(state, payload) {
    state.room = payload;
  },
};
