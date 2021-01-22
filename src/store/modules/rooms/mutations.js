export default {
  SOCKET_sendRooms(state, payload) {
    state.rooms = payload;
  },
  SOCKET_sendExitRoom(state, payload) {
    if (state.room.players) {
      state.room.players.forEach((player) => {
        if (player.id === state.user.id) {
          state.room = payload;
        }
      });
    }
  },
  SOCKET_sendRoom(state, payload) {
    state.room = payload;
  },
};
