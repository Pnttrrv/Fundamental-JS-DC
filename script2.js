// // let angka = 100;
// let text = 'Hallo';
// let isAvailable = true;
// let kosong = null;

// function Person(nama, umur) {
//   this.nama = nama;
//   this.umur = umur;
// }
// let mie = ['kaldu', 'goreng', 'kari'];
// let item = {
//   nama: 'Dika',
//   umur: 27,

//   alamat: {
//     kota: 'Pontianak',
//     kecamatan: 'Saigon',
//     belanja: ['minyak', 'sirup', 'kacang', mie],
//   },
// };

// console.log(item.alamat.belanja[1]);

// let mhs1 = new Person('Zia', 30);
// console.log(typeof mhs1);

// const arr = [1, 2, 3];

// const newArrAfterSpread = [5, 6, ...arr];
// console.log('New array (after spread operator):', newArrAfterSpread); // [5, 6, 1, 2, 3]

// function tambah(...arrgs) {
//   //rest parameter
//   //   let total = 0;
//   //   for (let i of arrgs) {
//   //     total += i;
//   //   }
//   //   return total;
//   return arrgs.reduce((angkaPertama, angkaSelanjutnya) => angkaPertama + angkaSelanjutnya, 0);
// }

// let angka = [1, 2, 3];
// let jumlah = tambah(...angka); //spread
// console.log(jumlah);

const token = ~~[Math.random() * 12345678];
const buah = ['apple', 'peach', 'orange'];

function login(username) {
  console.log('Processing Username now...');

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != 'Dika') {
        failed('Wrong username, cannot access Token!!!');
      }
      success({ token });
    }, 300);
  });
}

function getUser(token) {
  console.log('Processing ApiKey now...');

  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!token) {
        failed('Token empty, cannot access!!!');
      }
      success({ apiKey: 'Xkey12345' });
    }, 800);
  });
}

function getBuah(apiKey) {
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (!apiKey) {
        failed('Apikey empty, cannot access Buah');
      }
      success({ list: buah });
    }, 1500);
  });
}

async function diplayUser() {
  try {
    const { token } = await login('Dika');
    console.log(token);
    const { apiKey } = await getUser(token);
    console.log(apiKey);
    const { list } = await getBuah(apiKey);
    console.log(list);
  } catch (err) {
    console.log(err);
  }
}

diplayUser();

// for (let i of buah) {
//   console.log(i);
// }

// buah.forEach((item) => {
//   console.log(item);
// });
