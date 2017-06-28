// v-bind, function
var domApp1 = new Vue({
  el: '#dom-app1',
  data: {
    title: 'Helloo!!',
    link: 'https://google.com',
    finishedLink: '<a href="#">Googlllle</a>',
  },
  methods: {
    hello: () => {
      this.title = 'Yo!';
      return this.title;
    },
  },
})