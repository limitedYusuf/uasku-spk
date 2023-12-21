new Vue({
   el: '#app',
   data: {
      alternatif: [
         { nama: 'D1', performa: 4, keamanan: 4, fitur: 4 },
         { nama: 'D2', performa: 5, keamanan: 5, fitur: 5 },
         { nama: 'D3', performa: 3, keamanan: 3, fitur: 3 },
         { nama: 'D4', performa: 2, keamanan: 2, fitur: 2 }
      ]
   },
   computed: {
      sortedAlternatif: function () {
         return [...this.alternatif].sort((a, b) => this.calculateNilaiTotal(b) - this.calculateNilaiTotal(a));
      },
      perangkatTertinggi: function () {
         return this.sortedAlternatif[0].nama;
      }
   },
   methods: {
      calculateNilaiTotal: function (item) {
         return (0.4 * item.performa) + (0.3 * item.keamanan) + (0.3 * item.fitur);
      }
   }
});