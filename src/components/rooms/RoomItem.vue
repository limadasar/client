<template>
  <div class="nes-container is-rounded">
    <h5>Room: {{ room.name }}</h5>
    <p>{{ room.players.length }}/{{ room.maxPlayer }}</p>
    <button
      v-if="room.players.length <= room.maxPlayer"
      @click.prevent="join(room.id)"
      type="button"
      class="nes-btn is-warning"
    >
      Join
    </button>
  </div>
</template>

<script>
export default {
  name: 'RoomItem',
  props: ['index', 'room'],
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    join(id) {
      const data = {
        idRoom: id,
        idUser: this.user.id,
        name: this.user.name,
      };

      this.$socket.emit('joinRoom', data);
      this.$router.replace(`/game/${id}`);
    },
  },
};
</script>

<style></style>
