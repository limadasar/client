<template>
  <div>
    <h1 class="nes-text"><center>Game</center></h1>
    <div class="row">
      <div class="column-30">
        <div class="nes-container with-title">
          <p class="title">Players ({{ room.players.length }}/{{ room.maxPlayer }})</p>
          <div class="lists">
            <ul class="nes-list is-disc">
              <li v-for="(player, index) in room.players" :key="index">
                {{ player.name }}
                <i v-if="Number(room.roomMaster) === player.id" class="nes-icon is-small star"></i>
              </li>
            </ul>
          </div>

          <button @click.prevent="exitGame" type="button" class="nes-btn is-error">Exit</button>
        </div>
      </div>
      <div class="column-70">
        <div class="nes-container with-title is-centered">
          <div v-if="!onPlay">
            <waiting />
          </div>
          <div v-else>
            <p class="title">Ronde {{ round }}</p>
            <h3>Sisa waktu: {{ countDown }}</h3>
            <br />
            <form-number v-if="!ans" />
            <form-answer v-else />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormAnswer from '../components/game/FormAnswer.vue';
import FormNumber from '../components/game/FormNumber.vue';
import Waiting from '../components/game/Waiting.vue';

export default {
  name: 'Game',
  components: {
    FormAnswer,
    FormNumber,
    Waiting,
  },

  computed: {
    room() {
      return this.$store.getters.room;
    },
    user() {
      return this.$store.getters.user;
    },
  },
  created() {
    const data = {
      id: Number(this.$route.params.id),
    };
    this.$socket.emit('getRoom', data);
  },
  methods: {
    exitGame() {
      const data = {
        idRoom: this.room.id,
        idUser: this.user.id,
      };
      this.$socket.emit('exitRoom', data);
      this.$router.replace('/');
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
          if (this.countDown === 0) {
            if (!this.ans) {
              this.ans = true;
            } else {
              this.countDown = 20;
              this.ans = false;
              if (this.round <= this.maxRound) {
                this.round -= 1;
                this.countDownTimer();
              } else {
                // done
              }
            }
          }
        }, 1000);
      }
    },
  },
  data() {
    return {
      round: 1,
      countDown: 20,
      maxRound: 5,
      ans: false,
      onPlay: false,
    };
  },
};
</script>

<style scoped>
.column-30 {
  float: left;
  width: 30%;
  padding: 1rem;
}

.column-70 {
  float: left;
  width: 70%;
  padding: 1rem;
}

.row:after {
  content: '';
  display: table;
  clear: both;
}
</style>
