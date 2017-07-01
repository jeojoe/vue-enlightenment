<template>
  <p @click="deleteQuote(quote.id)">{{ index+1 }}: {{ quote.text }}</p>
</template>

<script>
export default {
  props: ['quote', 'index', 'deleteQuote'],
}
</script>

<style>
  
</style>
