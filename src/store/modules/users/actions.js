// import api from '@/api/api';

export default {
  SOCKET_sendUser(context, payload) {
    console.log(payload);
    context.commit('setUsers', payload);
  },
};
