<template>
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
</template>

<script>
export default {
  name: 'FormNumber',
};
</script>

<style></style>
