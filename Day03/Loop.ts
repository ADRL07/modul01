// Looping : Cara untuk menjalakan program berulang 

/**
 * FOR LOOP : Perulangan yang digunakan ketika dari awal sudah diketahui batas loopingnya
 * Aturan penulisan :
 *  for(statement_1;statement_2;statement_3){
 *     -taskCode
 * }
 * statement_1 : Variable yang mendefinisikan nilai awal dari hitungan batas loopinh
 * statement_2 : Kondisi untuk memeriksa bahwa statement_1 memiliki nilai sesuai kondisi yang diberikan
 * statement_3 : Berisi perhitungan increment atau decrement yang dilakukan pada variable statement_1 
 */ 

for (let i: number = 0; i < 5; i++) {
    console.log(`Loop ke-${i}`);
}

/**
 * WHILE LOOP : Secara umum digunakan untuk proses looping yang batasnya tidak pasti
 * Aturan penulisan :
 * while(condition) {
 *      -taskCode
 * }
 */
let count: number = 0;

while (count < 5) {
    console.log(`Loop ke-${count}`);
    count++;
}

/**
 * DO WHILE : secara umum sama cara kerjanya dengan while.
 *            tetapi DO WHILE pasti minimal taskCodenya akan dieksekusi 1 kali
 * 
 * Aturan penulisan :
 * do{
 *      -taskCode
 * }while(condition)
 */
let countB: number = 0;

do {
    console.log(`Loop ke${countB}`);
    countB++;
} while (countB < 5);


