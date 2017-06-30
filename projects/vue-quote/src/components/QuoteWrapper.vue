<template>
  <div>
    <p>QuoteWrapper</p>
    <Quote v-for="(quote, index) in quotes"
      :quote="quote"
      :index="index"
      :key="quote.id"
    ></Quote>
  </div>
</template>

<script>
import Quote from './Quote.vue';

export default {
  props: ['quotes'],
  components: { Quote },
}
</script>

<style>
  
</style>
