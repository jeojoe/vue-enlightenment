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

var domApp2 = new Vue({
  el: '#dom-app2',
  data: {
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increment: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    prohibitmousemove: function(e) {
      e.stopPropagation();
    },
    alertYo: function(e) {
      alert('Yo');
    },
  },
})