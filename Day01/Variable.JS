// variable : penampung data
/**
 * susuanan penulisan variable --> keywordvariable namavariable = datavariable;
 * keywordvariable : var, let, const
 * namavariable : - harus diawali dengan huruf atau diawali dengan symbol "_" atau symbol "$"
 *                - jika nama vaariable terdiri dari dua suku kata, maka disusun dengan mode 
 *                  camelcase atau snake-case.
 * datavariable : - nilai yang ingin kita simpan berdasarkan tipe data yang tersedia, diantaranya
 *                  string, number, boolean, null, undifined, arrat dan object. 
 */

// variable declaration
var massage;

// variable initialitation
var nama = "Abdi";

// fungsi JS, yang bertugas suntuk menampilkan data dari suatu variable/fungctuin/data secara langsung
console.log(nama); 

// keyword var : Redeclare, Reassign
var city = "Malang"
console.log(city);
var city = "Bandung" 
// redeclare
console.log(city);
city = "surabaya"; 
// reassign
console.log(city);

// Keyword let : Non-redeclare, Reassign
let age = 40;
console.log(age);
// let age = 25; // Non-redeclare
age = 30; 
console.log(age);
// age = 30; // reassign

// Keyword const : Non-redeclare, Non-reassign
const PI = 3.14;
console.log(PI);
// PI = 22 / 7; // Non-redeclare
// PI = 3.14159; // Non-reassign


// Data Type : Kumpulan model tipe data pada javascript
// Primitive
let region = "East Java"; // string
let weight = 60; // number
let isActive = true; // boolean
const noData = null; // null
const undefinedData = undefined; // undefined

// Non-Primitive
const product = ["Apel", "Jeruk", "Mangga"]; // array
const job = {
    position: "Coder",
    salaryRate: 4000000,
}; // Object