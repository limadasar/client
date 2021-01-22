<template>
  <div id="room">
    <div class="nes-container with-title is-centered">
      <h2>Hi.. {{ user.name }}</h2>
      <p class="title">Room</p>
      <button @click.prevent="openForm" type="button" class="nes-btn is-warning tombol">
        Create Room
      </button>
      <form @submit.prevent="createRoom" v-if="form" id="form" class="mt-1 nes-container">
        <div class="nes-field is-inline">
          <label for="warning_field">Name: </label>
          <input v-model="room.name" type="text" id="warning_field" class="nes-input is-warning" />
        </div>
        <div class="nes-field is-inline">
          <label for="warning_field">Max Player: </label>
          <input
            v-model="room.maxPlayer"
            type="number"
            id="warning_field"
            class="nes-input is-warning"
            placeholder="4"
            min="2"
            max="5"
            required
          />
        </div>
        <div class="nes-field is-inline">
          <label for="warning_field">Category: </label>
          <div class="nes-select is-warning">
            <select v-model="room.category" required id="warning_select">
              <option value="" disabled selected hidden>Select...</option>
              <option value="Hewan">Hewan</option>
            </select>
          </div>
        </div>
        <button type="submit" class="nes-btn is-warning">Buat</button>
      </form>
      <div class="row boxroom mt-3">
        <room-item v-for="(room, index) in rooms" :key="room.id" :index="index" :room="room" />
      </div>
    </div>
  </div>
</template>

<script>
import RoomItem from '../components/rooms/RoomItem.vue';

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
  components: { RoomItem },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    rooms() {
      return this.$store.getters.rooms;
    },
  },
  methods: {
    openForm() {
      this.form = !this.form;
    },
    closeForm() {
      this.form = false;
    },
    createRoom() {
      const id = Date.now();
      const players = [];
      players.push(this.user);
      const payload = {
        id,
        name: this.room.name,
        maxPlayer: this.room.maxPlayer,
        category: this.room.category,
        roomMaster: localStorage.getItem('id'),
        players,
      };
      this.$socket.emit('createRoom', payload);
      this.closeForm();
      this.$router.replace(`/game/${id}`);
    },
  },
};
</script>

<style scoped>
#room {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
.tombol:hover {
  padding: 10px;
}
.boxroom {
  width: 500px;
}
</style>
