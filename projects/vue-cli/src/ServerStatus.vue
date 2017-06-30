<template>
  <div>
    <p>Server Status : {{ status }}</p>
    <button @click="changeStatus">change status</button>
    <p>{{ displayName() }}</p>
    <p>{{ propNumber }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      propString: String,
      propNumber: {
        type: Number,
        default: 0,
      },
      propObject: function() {
        return {
          yo: 'yo',
        };
      },
    },
    data: function() {
      return {
        status: 'Critical',
      };
    },
    methods: {
      changeStatus() {
        this.status = 'Normal';
      },
      displayName() {
        return this.propString.split('').reverse().join("");
      }
    },
  }
</script>

<style type="text/css" scoped>
  div {
    border: 1px solid red;
  }
</style>