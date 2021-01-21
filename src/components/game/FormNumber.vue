<template>
  <div class="nes-container with-title is-centered">
    <p class="title">Ronde {{ round }}</p>
    <h3>Sisa waktu:</h3>
    <br />
    <div class="nes-container is-rounded">
      <h3>Kirim Angka:</h3>
      <label>
        <input type="radio" class="nes-radio" name="answer" checked />
        <span style="font-size: 100px;">0</span>
      </label>

      <label>
        <input type="radio" class="nes-radio" name="answer" />
        <span style="font-size: 100px;">1</span>
      </label>

      <label>
        <input type="radio" class="nes-radio" name="answer" />
        <span style="font-size: 100px;">2</span>
      </label>
      <label>
        <input type="radio" class="nes-radio" name="answer" />
        <span style="font-size: 100px;">3</span>
      </label>

      <label>
        <input type="radio" class="nes-radio" name="answer" />
        <span style="font-size: 100px;">4</span>
      </label>

      <label>
        <input type="radio" class="nes-radio" name="answer" />
        <span style="font-size: 100px;">5</span>
      </label>

      <button type="button" class="nes-btn is-primary">Pilih</button>
    </div>
    <div class="nes-container is-rounded">
      <h3>Nama Hewan Huruf Depan</h3>
      <h1>J</h1>
      <div class="nes-field">
        <label for="name_field">Masukkan Jawaban</label>
        <input type="text" id="name_field" class="nes-input" />
      </div>
      <br />
      <button type="button" class="nes-btn is-primary">Jawab</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormNumber',
};
</script>

<style></style>
