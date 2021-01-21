<template>
  <div class="login">
    <div class="nes-container with-title is-centered box">
      <p class="title">Hallo</p>
      <p class="nes-text is-success">Ayo bermain bersama</p>
      <h1>ABC 5 dasar ^_^</h1>
      <form @submit.prevent="addUser">
        <div class="nes-field input">
          <label for="name_field">Your name, Kimi no Namaewa</label>
          <input
            type="text"
            v-model="name"
            id="name_field"
            class="nes-input"
            placeholder="Hey input your name .."
          />
        </div>
        <br />
        <button type="submit" class="nes-btn is-success tombol">Masuk!</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      name: '',
    };
  },
  methods: {
    addUser() {
      const id = Date.now();
      const data = {
        id,
        name: this.name,
      };
      this.$socket.emit('login', data);
      this.$store.dispatch('addUser', data);
      this.$router.push('/');
    },
  },
};
</script>

<style>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.box {
  width: 500px;
}

.tombol:hover {
  padding: 10px;
}
</style>
