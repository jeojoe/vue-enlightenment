<template>
  <div class="ui progress" id="progress" :data-value="count" :data-total="max">
    <div class="bar"></div>
  </div>
</template>

<script>
  export default {
    props: ['count', 'max'],
    mounted() {
      $(this.$el).progress();
    },
    updated() {
      $(this.$el).progress('update progress', this.count);
    }
  }
</script>

<style>
  
</style>
