// Function 
/**
 * - Definisi : Sekumpulan program yang ditujukan untuk menyelesaikan suatu proses khusus.
 *              - Untuk menggunakan function, maka harus dibuat terlebih dahulu.
 *              - Function bersifat reusable dan modular.
 * - Kategori : Built-in function dan User-defined function (contoh : console.log)
 * - Aturan : 
 *         - Nama function mengacu pada aturan penamaan variable (camelCase atau snakeCase)
 *         - Format penulisan :
 *            - Declarative function : 
 *                    function namaFunc(param1?, param2?,...){
 *                         - code
 *                    }
 *            - Function expression :
 *                    const namaFunc = function(param1?, param2?,...){
 *                         - code
 *                    }
 *            - Arrow function 
 *                     a. const namaFunc = (param1?, param2?,....) => - code
 *                     b. const namaFunc = (param1?, param2?,...) => {
 *                             - code
 *                          }
 *  - Function mungkin membutuhkan parameter. Parameter merupakan value dari luar function, 
 *    yang nantinya mungkin akan dibutuhkan untuk melengkapi proses di dalam function.
 *  - Function biasanya menghasilkan nilai output melalui return bisa juga tidak.
 */

// Declarative function
// Membuat function
function penjumlahan(numA: number, numB: number) {
    const result: number = numA + numB;
    return result
}

penjumlahan; // Memanggil fungsi

// penjumlahan(); // Menjalankan fungsi

console.log(penjumlahan(15, 2));

// CALLBACK FUNCTION : sebuah function yang dititipkan lewat parameter untuk dijalankan
//                     didalam function utama pemilik parameter

function renderCalculator(angkaC: number, angkaD: number, callbackFnOperation: any) {
    const hasil = callbackFnOperation(angkaC, angkaD)
    console.log(`Hasil Perhitungan : ${hasil}`);
}

function pengurangan(valueA: number, valueB: number) {
    return valueA - valueB;
}
function perkalian(valueA: number, valueB: number) {
    return valueA * valueB
}

renderCalculator(12, 5, pengurangan);
renderCalculator(12, 5, perkalian);
