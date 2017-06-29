var instanceApp1 = new Vue({
  el: '#instance-app1',
  data: {
    text: 'Hey',
  },
  beforeCreate: function() {
    console.log('beforeCreate()');
  },
  created: function() {
    console.log('created()');
  },
  beforeMount: function() {
    console.log('beforeMount()');
  },
  mounted: function() {
    console.log('mounted()');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },
  updated: function() {
    console.log('updated()');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },
  destroyed: function() {
    console.log('destroyed()');
  },
  methods: {
    destroy: function() {
      // detach Vue instance from HTML
      this.$destroy();
    },
  },
})

Vue.component('my-cmp', {
  data: function() {
    return {
      text: 'This is text',
    };
  },
  template: '<p>{{ text }}</p>',
})

new Vue({
  el: '#component-app1',
})

