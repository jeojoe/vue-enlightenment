<template>
  <div>
    <p>Server Status : {{ status }}</p>
    <button @click="changeStatus">change status</button>
    <a>Hey</a>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        status: 'Critical',
      };
    },
    methods: {
      changeStatus() {
        this.status = 'Normal';
      },
    },
  }
</script>

<style type="text/css" scoped>
  div {
    border: 1px solid red;
  }
</style>