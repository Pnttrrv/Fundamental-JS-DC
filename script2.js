let angka = 100;
let text = 'Hallo';
let isAvailable = true;
let kosong = null;

function Person(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}
let mie = ['kaldu', 'goreng', 'kari'];
let item = {
  nama: 'Dika',
  umur: 27,

  alamat: {
    kota: 'Pontianak',
    kecamatan: 'Saigon',
    belanja: ['minyak', 'sirup', 'kacang', mie],
  },
};

console.log(item.alamat.belanja[1]);

let mhs1 = new Person('Zia', 30);
console.log(typeof mhs1);
