<template>
  <div>
    <server-status v-for="server in 5" propString="James"></server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';

  export default {
    components: {
      'server-status': ServerStatus,
    },
  };
</script>