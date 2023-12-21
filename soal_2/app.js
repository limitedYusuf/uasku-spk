new Vue({
   el: '#app',
   data: {
      alternatif: [
         { id: 'A1', c1: 4, c2: 4, c3: 3 },
         { id: 'A2', c1: 5, c2: 5, c3: 4 },
         { id: 'A3', c1: 3, c2: 3, c3: 2 },
         { id: 'A4', c1: 2, c2: 2, c3: 1 }
      ],
      bobot: [5, 4, 3],
      vektorBobot: {}
   },
   computed: {
      sortedVektorBobot() {
         const sortable = [];
         for (let alternatif in this.vektorBobot) {
            sortable.push([alternatif, this.vektorBobot[alternatif]]);
         }
         sortable.sort((a, b) => b[1] - a[1]);
         return sortable;
      },
      perangkatTertinggi: function () {
         return this.sortedVektorBobot[0][0];
      }
   },
   mounted() {
      this.calculateVektorBobot();
   },
   methods: {
      calculateVektorBobot() {
         this.alternatif.forEach(item => {
            const vb = (this.bobot[0] * item.c1) + (this.bobot[1] * item.c2) + (this.bobot[2] * item.c3);
            this.$set(this.vektorBobot, item.id, vb);
         });
      }
   }
});