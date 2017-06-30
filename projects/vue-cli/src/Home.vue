<template>
  <div>
    <p>{{ status }}</p>
    <server-status :propString="status" @nameWasReset="status = $event"></server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';

  export default {
    data: function() {
      return {
        status: 'Critical',
      };
    },
    components: {
      'server-status': ServerStatus,
    },
  };
</script>