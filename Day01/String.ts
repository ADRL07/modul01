// String : data yang terdiri dari huruf atau karakter text
let namaToko: string = "BEST SPORTS STORE"; // Double quotes
let alamatToko: string = `Jl. Pahlawan No. 170`; // Template literal atau backthick 

//Menggabungkan data string
// Cara 1 : Menggunakan operator penjumlahan +
let tokoKu: string = namaToko + " " + alamatToko;
console.log(tokoKu);

// Cara 2 : Menggunakan template literal with backthick
tokoKu = `${namaToko} ${alamatToko}`;
console.log(tokoKu);

// typeof : fungsi JS yang bertugas untuk mengetahui tipe data suatu variable atau data itu 
console.log(typeof tokoKu);
console.log(typeof 10);

// FUNGSI BAWAAN TIPE DATA STRING
let greeting: string = "Hello World";

// length : menghitung panjang characther pada string
console.log(greeting.length);

// toLowerCase() : mengubah string menjadi huruf kecil
console.log(greeting.toLowerCase());

// toUpperCase() : mengubah string menjadi huruf besar
console.log(greeting.toUpperCase());

// includes() : memastikan suatu kata di dalam string
console.log(greeting.includes("Hey"));

// split() : merubah data string menjadi data array
console.log(greeting.split(" "));

// replace : mengganti kata tertentu
console.log(greeting.replace("World", "Citizen"));


