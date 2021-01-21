import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Game from '../views/Game.vue';
import Rooms from '../views/Rooms.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Rooms',
    component: Rooms,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, _, next) => {
  if (to.name !== 'Login' && !localStorage.getItem('id')) {
    next('/login');
  } else if (to.name === 'Login' && localStorage.getItem('id')) {
    next('/');
  } else {
    next();
  }
});

export default router;
