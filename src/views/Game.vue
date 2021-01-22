<template>
  <div>
    <h1 class="nes-text">
      <center>Game - {{ room.name }}</center>
    </h1>
    <div class="row">
      <div class="column-30">
        <div class="nes-container with-title">
          <p class="title">Players</p>
          <div class="lists">
            <ul class="nes-list is-disc">
              <li v-for="(player, index) in room.players" :key="index">
                {{ player.name }}
                <i v-if="Number(room.roomMaster) === player.id" class="nes-icon is-small star"></i>
              </li>
            </ul>
          </div>

          <button @click.prevent="exitGame" type="button" class="nes-btn is-error">
            Exit
          </button>
        </div>
      </div>
      <div class="column-70">
        <div class="nes-container with-title is-centered">
          <div v-if="!play">
            <div class="nes-container is-rounded">
              <h1>Waiting</h1>

              <i class="nes-octocat animate"></i>
              <p>Until Master Room Start...</p>

              <button @click.prevent="playGame" type="button" class="nes-btn is-success">
                Start Game
              </button>
            </div>
            <div v-if="scoreboard" class="nes-container is-rounded">
              <h1>Score anda: {{ score }}</h1>
              <button @click.prevent="reset" type="button" class="nes-btn is-primary">
                Ok
              </button>
            </div>
          </div>
          <div v-else>
            <p class="title">Ronde {{ round }}</p>
            <h3>Sisa waktu: {{ countDown }}</h3>
            <br />
            <div v-if="!ans" class="nes-container is-rounded">
              <h3>Kirim Angka:</h3>

              <label>
                <input type="radio" v-model="num" class="nes-radio" value="1" name="answer" />
                <span style="font-size: 100px;">1</span>
              </label>

              <label>
                <input type="radio" v-model="num" class="nes-radio" value="2" name="answer" />
                <span style="font-size: 100px;">2</span>
              </label>
              <label>
                <input type="radio" v-model="num" class="nes-radio" value="3" name="answer" />
                <span style="font-size: 100px;">3</span>
              </label>

              <label>
                <input type="radio" v-model="num" class="nes-radio" value="4" name="answer" />
                <span style="font-size: 100px;">4</span>
              </label>

              <label>
                <input type="radio" v-model="num" class="nes-radio" value="5" name="answer" />
                <span style="font-size: 100px;">5</span>
              </label>

              <!-- <button type="button" class="nes-btn is-primary">Pilih</button> -->
            </div>
            <div v-else class="nes-container is-rounded">
              <h3>Nama Hewan Huruf Depan</h3>
              <h1>{{ alpha }}</h1>
              <div class="nes-field">
                <label for="name_field">Masukkan Jawaban</label>
                <input type="text" v-model="answer" id="name_field" class="nes-input" />
              </div>
              <br />
              <button @click.prevent="pushAnswered" type="button" class="nes-btn is-primary">
                Jawab
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  computed: {
    room() {
      return this.$store.getters.room;
    },
    user() {
      return this.$store.getters.user;
    },
    game() {
      return this.$store.getters.game;
    },
    answers() {
      return this.$store.getters.answers;
    },
  },
  created() {
    const data = {
      id: Number(this.$route.params.id),
    };
    this.$socket.emit('getRoom', data);
  },
  methods: {
    getAnswers(al) {
      this.$store.dispatch('getAnswers', al);
    },
    pushAnswered() {
      this.answered.push(this.answer.toLowerCase());

      this.answer = '';
    },
    matchAnswers() {
      this.answered.forEach((data) => {
        this.answers.forEach((data1) => {
          if (data === data1) {
            this.score += 1;
          }
        });
      });
    },
    playGame() {
      this.play = true;
      this.countDownTimer();
    },
    reset() {
      this.play = false;
      this.scoreboard = false;
    },
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
              this.alpha = String.fromCharCode(Number(this.num) + 64);
              this.getAnswers(this.alpha);
              this.ans = true;
              this.countDown = 10;
              this.countDownTimer();
            } else {
              if (this.round < this.maxRound) {
                this.round += 1;
                this.countDown = 10;
                this.countDownTimer();
              } else {
                // done
                this.matchAnswers();
                this.$store.commit('removeAnswers');
                this.scoreboard = true;
                this.answered = [];
                this.play = false;
              }
              this.countDown = 5;
              this.ans = false;
            }
          }
        }, 1000);
      }
    },
  },
  data() {
    return {
      round: 1,
      countDown: 10,
      maxRound: 2,
      num: 1,
      alpha: '',
      answered: [],
      score: 0,
      answer: '',
      ans: false,
      play: false,
      scoreboard: false,
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
