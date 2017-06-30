<template>
  <div>
    <input
      v-model="quoteText"
      placeholder="Insert Quote Here!"
      @keydown.enter="addQuote(quoteText)"
    />
    {{ quoteText }}
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      addQuote: {
        type: Function,
        required: true,
      },
    },
    data: function() {
      return {
        quoteText: '',
      };
    },
  }  
</script>

<style type="text/css">
  
</style>