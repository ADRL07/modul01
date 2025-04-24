// Exercise 1 (23 April 2025)
// Soal 1 : - Buat program untuk harga tiket berdasarkan usia
//          - Jika usia < 5 tahun maka gratis , usia 5 s/d 17 tahun 20.000,
//            usia 17 s/d 60 tahun 50.000 dan usia diatas 60 gratis

let age: number = 8;
let tiket: string = "";
if (age < 5) {
    tiket = `FREE`;
} else if (age > 60){
    tiket = `FREE`;
} else if (age >= 5 && age <= 17) {
    tiket = `20.000`;
} else if (age >= 17 && age <=60) {
    tiket = `50.000`;
} 
console.log(` Umur ${age} tahun, bayar ${tiket}`);

// Soal 2 : Buat pengkondisian untuk memastikan suatu data merupakan email atau bukan

// Else if statement
let Email: string = ".";
let pengecekan: string = "";
if (Email.includes("@")) {
    pengecekan = `Valid`;
} else if (Email.includes(".")) {
    pengecekan = `Valid`;
} else {
    pengecekan = `Tidak Valid`;
}
console.log(pengecekan);


// Exercise 2 (23 April 2025)
// 1. write a code to check wether the number is odd or even
let nomor: number = 6;
if (nomor % 2 === 0 ) {
    console.log(`${nomor} adalah bilangan genap`);
} else {
    console.log(`${nomor} adalah bilangan ganjil`);
}

// 2. write a code to check wether the number is prime or not
// INPUT : numb
let numb: number = 20;
// Process:
/** 
 * - Buat variable count = 0 
 * - Melakukan perulangan dari angka i = 1 hingga angka yang diinputkan
 * - Setiap terjadi perulangan maka angka dari numb akan kita mod dengan i
 * -   Jika numb % i === 0
 * -        count++
 * - Setelah perulangan selesai maka count akan diperiksa
 * -     Jika count === 2
 *           Tampilankan "PRIME"
 * -     ELSE 
 *           Tampilkan "NOT PRIME"
 */
let Count: number = 0;
for (let i: number = 1; i <= numb; i++) {
    if (numb % i === 0) {
        Count++;
    }
}

if (Count === 2) {
    // OUTPUT : "Prime" jika bilangan prima dan "Not Prime" Jika bukan bilangan prima
    console.log("PRIME");
} else {
    console.log("NOT PRIME");
}

// 3. write a code to find the sum of the number 1 to N

const inputNumber2: number = 5;
let hasil: number = 0;

for(let i = 1; i <= inputNumber2; i++) {
    hasil = hasil + i
}
console.log(hasil);

// 4. write a code to find the factorial of a number
 const angka: number = 5;
 let Hasil: number = 0;

 for (let i: number = 1; i <= angka; i++) {
     if (Hasil === 0) {
         Hasil = i;
     } else {
         Hasil = Hasil * i;
     }
 }
 console.log(Hasil);