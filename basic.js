var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello World, Vue or Whatever !',
  },
})
var app2 = new Vue({
  el: '#app2',
  data: {
    msg: 'Wow it\'s ' + new Date()
  },
})
var app3 = new Vue({
  el: '#app3',
  data: {
    seen: true,
  },
})
var app4 = new Vue({
  el: '#app4',
  data: {
    items: [
      { text: 'dfdsfsdfsd' },
      { text: 'dfdsfsdfsd' },
      { text: 'dfdsfsdfsd' },
    ],
  }
})
var app5 = new Vue({
  el: '#app5',
  data: { message: 'Hey broooo' },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
var app6 = new Vue({
  el: '#app6',
  data: { msg: 'Hellooo' }
})