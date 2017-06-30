<template>
  <div id="app">
    <MainProgress :count="quotes.length"></MainProgress>
    <MainInput></MainInput>
    <QuoteWrapper></QuoteWrapper>
  </div>
</template>

<script>
import MainProgress from './components/Progress.vue';
import MainInput from './components/Input.vue';
import QuoteWrapper from './components/QuoteWrapper.vue';

export default {
  data: function() {
    return {
      quotes: [],
      max: 10,
    };
  },
  components: { MainProgress, MainInput, QuoteWrapper },
}
</script>

<style>

</style>
