// Conditional statement : code yang ditunjukan untuk memberikan pilihan eksekusi
//                         program sesuai yang diberikan.
/**
 * - IF : untuk satu kondisi
 * - IF....ELSE : untuk dua kondisi
 * - IF...ELSE IF...ELSE : untuk lebih dari dua kondisi atau lebih
 * - SWITCH...CASE: pengkondisian dalam bentuk validasi kecocokan nilai
 */

// Example Data
let nama: string = "Edo";
let usia: number = 20;
let email: string = "edo@tensei.com";

// IF STATEMENT
/**
 * Aturan penulisan :
 * if(condition){
 *       -taskcode
 * }
 * note :
 * - condition : kondisi yang diinginkan berdasarkan nilai boolean
 *               yang didapat dari COMPARISON/LOGICAL/TRUTHLY/FALSY
 * - taskcode : kumpulan baris program yang ingin dijalankan
 */
// Example case : memvalidasi batas usia tertentu
let message = "";
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`;
}

console.log(message);

// IF...ELSE STATEMENT
/** 
 * Aturan penulisan :
 * if(condition){
 *       -taskCode
 * } else {
 *      -taskCode
 * }
 */
usia = 18
if (usia > 17) {
    message = `Verifikasi usia ${email} berhasil`;
} else {
    message = `Verifikasi usia${email} GAGAL`;
}

console.log(message)

// IF...ELSE IF...ELSE 
/** 
 * Aturan penulisan :
 * if(condition){
 *       -taskCode
 * } else if(condition){
 *      -taskCode
 * } else {
 *      -taskcode
 * }
 */

let examGrade: number = 75; 
let result: string = "";
if (examGrade >= 90) {
    result = "Grade A";
} else if (examGrade < 90 && examGrade >= 80) {
    result = "Grade B";
} else if (examGrade < 80 && examGrade >= 70) {
    result = "Grade C";
} else {
    result = "Grade D";
}

console.log(result);

//Ternary operator
/**
 * Aturan penulisan :
 * let value: string = condition ? mainValue : optionValue;
 */ 
// Cara 1
usia = 10;
let verified: string = usia > 17 ? `Berhasil` : `GAGAL`;
message = `Verifikasi usia ${email} ${verified}`;
console.log(message);

// Cara 2 
usia = 20
message = `Verifikasi usia ${email} ${usia > 17 ? `Berhasil` : `GAGAL`}`;
console.log(message);

// SWITCH CASE
/**
 * Aturan penulisan :
 * Switch(variableOfValue){
 *     case "A":
 *         -taskCode
 *     case "B";
 *         -taskCode
 *    default:
 *         -taskCode
 * }
 */
let job: string = "Doctor";

switch(job) {
    case "Coder":
        console.log("Build a software");
        break;
    case "Driver":
        console.log("Driving car");
        break;
    default:
        console.log("I don't know");
}

