<template>
  <div>
    <h1 class="nes-text"><center>Game</center></h1>
    <div class="row">
      <div class="column-30">
        <div class="nes-container with-title">
          <p class="title">Players</p>
          <div class="lists">
            <ul class="nes-list is-disc">
              <li>Ari</li>
            </ul>
          </div>
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
  methods: {
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
