var app = new Vue({
  el: '#app',
  data: {
    heroScore: 0,
    monsterScore: 0,
    isPlaying: false,
    results: [],
  },
  methods: {
    startNewGame: function() {
      this.isPlaying = true;
      this.heroScore = 100;
      this.monsterScore = 100;
    },
    attack: function() {

    },
    powerAttack: function() {

    },
    heal: function() {

    },
    giveUp: function() {

    },
  },
})