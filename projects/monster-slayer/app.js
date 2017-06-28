var app = new Vue({
  el: '#app',
  data: {
    heroLife: 0,
    monsterLife: 0,
    isPlaying: false,
    winner: '',
    statuses: [], // [ { effectOnHero, effectOnMonster } ]
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
      this.calculateLife(-heroDamages, -monsterDamages);
    },
    powerAttack: function() {
      // Random power damages
      const heroDamages = Math.ceil(Math.random() * 50);
      const monsterDamages = Math.ceil(Math.random() * 50);
      // Calculate Life
      this.calculateLife(-heroDamages, -monsterDamages);
    },
    heal: function() {
      // Random Hero's healing and Monster's damages
      const heroHealing = Math.ceil(Math.random() * 10);
      const monsterDamages = Math.ceil(Math.random() * 10);
      // Calculate Life
      this.calculateLife(heroHealing, -monsterDamages, 'healing');
    },
    giveUp: function() {

    },
    calculateLife: function(effectOnMonster, effectOnHero, healing) {
      let hasWinner = false;
      let heroLife_left = this.heroLife;
      let monsterLife_left = this.monsterLife;

      if (healing) {
        heroLife_left += effectOnHero;
        // A little fucked up logic : effectOnMonster is healing lol
        heroLife_left += effectOnMonster;
      } else {
        heroLife_left += effectOnHero;
        monsterLife_left += effectOnMonster;
      }
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
        hero: effectOnMonster < 0 ?
          'Hero\'s attack is ' + effectOnMonster : 'Hero is healed for ' + effectOnMonster,
        monster: 'Monster\'s attack is ' + effectOnHero,
      });

      if (hasWinner) {
        this.isPlaying = false;
      }
    }
  },
})