new Vue({
   el: '#app',
   data: {
      criteriaWeight: {
         'Jangkauan Area': 0.3651,
         'Customer Service': 0.0883,
         'Jaminan Keamanan': 0.3375,
         'Akses Tracking': 0.4246
      },
      alternatives: [
         { name: 'JNE', values: [1, 3, 2, 4] },
         { name: 'JNT', values: [0.33, 1, 0.5, 2] },
         { name: 'POS', values: [0.5, 2, 1, 3] },
         { name: 'TIKI', values: [0.25, 0.5, 0.33, 1] }
      ]
   },
   computed: {
      highestScore: function () {
         let scores = {
            'JNE': this.calculateScore('JNE'),
            'JNT': this.calculateScore('JNT'),
            'POS': this.calculateScore('POS'),
            'TIKI': this.calculateScore('TIKI')
         };
         return Math.max(...Object.values(scores));
      },
      bestOption: function () {
         let scores = {
            'JNE': this.calculateScore('JNE'),
            'JNT': this.calculateScore('JNT'),
            'POS': this.calculateScore('POS'),
            'TIKI': this.calculateScore('TIKI')
         };
         return Object.keys(scores).find(key => scores[key] === this.highestScore);
      },
      highestScorePerAlternative: function () {
         let scores = {};
         for (let alternative of this.alternatives) {
            scores[alternative.name] = this.calculateScore(alternative.name);
         }
         return scores;
      },
      sortedOptions: function () {
         return Object.entries(this.highestScorePerAlternative)
            .map(([name, score]) => ({ name, score }))
            .sort((a, b) => b.score - a.score);
      }
   },
   methods: {
      calculateScore: function (alternative) {
         let weights = this.criteriaWeight;
         let alternativeValues = this.alternatives.find(a => a.name === alternative).values;
         let score = 0;
         for (let i = 0; i < alternativeValues.length; i++) {
            score += weights[Object.keys(weights)[i]] * alternativeValues[i];
         }
         return score;
      }
   }
});