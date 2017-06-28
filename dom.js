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

var domApp3 = new Vue({
  el: '#dom-app3',
  data: {
    name: 'jeojoe',
    counter: 0,
    dummyCounter: 0,
  },
  computed: {
    output: function() {
      console.log('computed');
      return this.counter;
    }
  },
  watch: {
    counter: function() {
      var dis = this;
      setTimeout(function() {
        dis.counter = 0;
      }, 2000);
    }
  },
  methods: {
    render: function() {
      console.log('methods');
      return this.dummyCounter;
    }
  }
})

var domApp4 = new Vue({
  el: '#dom-app4',
  data: {
    isRed: false,
    color: 'green',
    width: '150',
  },
  computed: {
    divClass: function() {
      return {
        red: this.isRed,
        blue: !this.isRed,
      }
    },
    myStyle: function() {
      return {
        'background-color': this.color,
        width: this.width + 'px',
      };
    }
  }
})

var domApp5 = new Vue({
  el: '#dom-app5',
  data: {
    persons: [
      { name: 'k', age: 10 },
      { name: 'l', age: 20 },
    ],
    items: ['yo', 'yay'],
    show: true,
  },
})