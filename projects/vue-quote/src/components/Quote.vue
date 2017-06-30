<template>
  <p>{{ index+1 }}: {{ quote.text }}</p>
</template>

<script>
export default {
  props: ['quote', 'index'],
}
</script>

<style>
  
</style>