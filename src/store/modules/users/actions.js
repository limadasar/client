// import api from '@/api/api';

export default {
  addUser(context, payload) {
    localStorage.setItem('id', payload.id);
    context.commit('setUser', payload);
  },
};
