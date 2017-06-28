var app = new Vue({
  el: '#app',
  data: {
    heroLife: 0,
    monsterLife: 0,
    isPlaying: false,
    winner: '',
    statuses: [], // [ { heroDamages, monsterDamages } ]
  },
  methods: {
    startNewGame: function() {
      this.isPlaying = true;
      this.heroLife = 100;
      this.monsterLife = 100;
      this.winner = '';
    },
    attack: function() {
      // Random damages
      const heroDamages = Math.ceil(Math.random() * 10);
      const monsterDamages = Math.ceil(Math.random() * 10);
      // Calculate Life
      this.calculateLife(heroDamages, monsterDamages);
    },
    powerAttack: function() {
      // Random power damages
      const heroDamages = Math.ceil(Math.random() * 50);
      const monsterDamages = Math.ceil(Math.random() * 50);
      // Calculate Life
      this.calculateLife(heroDamages, monsterDamages);
    },
    heal: function() {

    },
    giveUp: function() {

    },
    calculateLife: function(heroDamages, monsterDamages) {
      let hasWinner = false;
      let heroLife_left = this.heroLife;
      let monsterLife_left = this.monsterLife;

      heroLife_left -= monsterDamages;
      monsterLife_left -= heroDamages;
      // console.log(heroLife, monsterLife);
      if (heroLife_left <= 0 && monsterLife_left <= 0) {
        this.heroLife = 0;
        this.monsterLife = 0;
        // Set winner
        hasWinner = true;
        this.winner = 'tied';
      } else if (heroLife_left <= 0) {
        this.heroLife = 0;
        this.monsterLife = monsterLife_left;
        // Set winner
        hasWinner = true;
        this.winner = 'monster';
      } else if (monsterLife_left <= 0) {
        this.heroLife = heroLife_left;
        this.monsterLife = 0;
        // Set winner
        hasWinner = true;
        this.winner = 'hero';
      } else {
        this.heroLife = heroLife_left;
        this.monsterLife = monsterLife_left;
      }

      this.statuses.push({
        heroDamages: heroDamages,
        monsterDamages: monsterDamages,
      });

      if (hasWinner) {
        this.isPlaying = false;
      }
    }
  },
})