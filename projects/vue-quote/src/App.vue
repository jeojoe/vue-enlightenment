<template>
  <div id="app">
    <MainProgress :count="quotes.length"></MainProgress>
    <MainInput :addQuote="addQuote"></MainInput>
    <QuoteWrapper :quotes="quotes"></QuoteWrapper>
  </div>
</template>

<script>
import MainProgress from './components/Progress.vue';
import MainInput from './components/Input.vue';
import QuoteWrapper from './components/QuoteWrapper.vue';

export default {
  data: function() {
    return {
      quotes: [
        { id: 0, text: 'first quote bitch' },
      ],
      id: 1,
      max: 10,
    };
  },
  components: { MainProgress, MainInput, QuoteWrapper },
  methods: {
    addQuote: function(quote) {
      // Check max quote
      if (this.quotes.length >= 10) {
        alert('Reach Max !');
        return;
      }
      // Add quote and increase id
      this.quotes.push({
        id: this.id, text: quote,
      });
      this.id++;
    }
  }
}
</script>

<style>

</style>
