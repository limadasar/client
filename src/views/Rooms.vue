<template>
  <div id="room">
    <div class="nes-container with-title is-centered">
      <p class="title">Room</p>
      <button @click.prevent="openForm"
        type="button" class="nes-btn is-warning tombol"
      >Create Room</button>
      <form @submit.prevent="createRoom" v-if="form" id="form" class="mt-1 nes-container">
        <div class="nes-field is-inline">
          <label for="warning_field">.name</label>
          <input v-model="room.name"
            type="text"
            id="warning_field"
            class="nes-input is-warning"
          >
        </div>
        <div class="nes-field is-inline">
          <label for="warning_field">.max player</label>
          <input
            v-model="room.maxPlayer"
            type="number"
            id="warning_field"
            class="nes-input is-warning"
            placeholder="4"
          >
        </div>
        <div class="nes-field is-inline">
          <label for="warning_field">.category</label>
          <div class="nes-select is-warning">
            <select v-model="room.category" required id="warning_select">
              <option value="" disabled selected hidden>Select...</option>
              <option value="Hewan">Hewan</option>
            </select>
          </div>
        </div>
        <button type="submit" class="nes-btn">Buat</button>
      </form>
      <div class="row boxroom mt-3">
        <!-- fetch room -->
        <div class="card col-4 mt-1">
          <div class="card-body">
            <h5 class="card-title">Room: 1</h5>
            <p class="card-text">
              4/4
            </p>
            <a @click.prevent="join" href="#" class="nes-btn is-warning">Join</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: false,
      room: {
        name: '',
        maxPlayer: '',
        category: '',
      },
    };
  },
  methods: {
    openForm() {
      this.form = !this.form;
    },
    createRoom() {
      const id = new Date();
      const payload = {
        idRoom: id,
        name: this.room.name,
        maxPlayer: this.room.maxPlayer,
        category: this.room.category,
      };
      this.$socket.emit('create', payload);
    },
    join() {},
  },
};
</script>

<style scoped>
#room {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vW;
  height: 100vh;
}
.tombol:hover {
  padding: 10px;
}
.boxroom {
  width: 500px;
}
</style>
