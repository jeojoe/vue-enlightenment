<template>
  <div id="app">
    <MainProgress :count="quotes.length" :max="max"></MainProgress>
    <MainInput :addQuote="addQuote"></MainInput>
    <!-- <QuoteWrapper :quotes="quotes"></QuoteWrapper> -->
    <Quote v-for="(quote, index) in quotes"
      :quote="quote"
      :index="index"
      :key="quote.id"
      :deleteQuote="deleteQuote"
    ></Quote>
  </div>
</template>

<script>
import MainProgress from './components/Progress.vue';
import MainInput from './components/Input.vue';
import Quote from './components/Quote.vue';

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
  components: { MainProgress, MainInput, Quote },
  methods: {
    addQuote(quote) {
      // Check max quote
      if (this.quotes.length >= this.max) {
        alert('Reach Max !');
        return;
      }
      // Add quote and increase id
      this.quotes.push({
        id: this.id, text: quote,
      });
      this.id++;
    },
    deleteQuote(id) {
      for (let i = 0; i < this.quotes.length; i++) {
        if (this.quotes[i].id === id) {
          this.quotes.splice(i, 1);
          break;
        }
      }
    }
  }
}
</script>

<style>

</style>
