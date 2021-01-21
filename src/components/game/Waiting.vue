<template>
  <div class="nes-container is-rounded">
    <h1>Waiting</h1>

    <i class="nes-octocat animate"></i>
    <p>Until Master Room Start...</p>

    <button v-if="Number(room.roomMaster) === user.id" type="button" class="nes-btn is-success">
      Start Game
    </button>
  </div>
</template>

<script>
export default {
  name: 'Waiting',
  computed: {
    room() {
      return this.$store.getters.room;
    },
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style></style>
