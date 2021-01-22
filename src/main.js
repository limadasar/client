import Vue from 'vue';
import VueSocketIO from 'vue-socket.io';
import App from './App.vue';
import router from './router';
import store from './store';
import 'nes.css/css/nes.min.css';

Vue.use(
  new VueSocketIO({
    debug: false,
    connection: 'https://glassgow-fox-abc5dasar.herokuapp.com',
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_',
    },
  }),
);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
