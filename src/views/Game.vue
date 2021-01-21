<template>
  <div>
    <h1 class="nes-text"><center>Game</center></h1>
    <div class="row">
      <div class="column-30">
        <div class="nes-container with-title">
          <p class="title">Terjawab</p>
          <div class="lists">
            <ul class="nes-list is-disc">
              <li>Ari (Jerapah)</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="column-70">
        <div class="nes-container with-title is-centered">
          <p class="title">Ronde {{ round }}</p>
          <h3>Sisa waktu: {{ countDown }}</h3>
          <br />
          <form-number />
          <form-answer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormAnswer from '../components/game/FormAnswer.vue';
import FormNumber from '../components/game/FormNumber.vue';

export default {
  name: 'Game',
  components: {
    FormAnswer,
    FormNumber,
  },
  methods: {
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
          if (this.countDown === 0) {
            this.countDown = 20;
            // if (this.round <= this.maxRound) {
            //   this.round -= 1;
            //   this.countDownTimer();
            // }
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
      jawab: false,
    };
  },
  created() {
    this.countDownTimer();
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
