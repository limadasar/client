<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem('id')) {
      const data = {
        id: Number(localStorage.getItem('id')),
      };
      this.$socket.emit('getUser', data);
      this.$socket.emit('getRooms');
    }
  },
};
</script>

<style>
#app {
  font-family: 'Press Start 2P', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
