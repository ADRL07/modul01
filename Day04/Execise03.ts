// Pertanyaan slide 3
// Soal 1
const randomNumber: number = 7;

for (let i: number = 0; i <= 10; i++) {
    console.log(`${randomNumber} X ${i} = ${randomNumber * i}`);

}

// Soal No 2
let word: string = `jamur`;
let reverseWord: string = ``;
 if (word === word.split(``).reverse().join(``)) {
    reverseWord = `${word} --> Palindrome`;
 } else {
    reverseWord = `${word} --> Not Palindrome`;
 }
 console.log(reverseWord);

// Soal No 3
let input: number = 20000;
let hasilConvert: string = ``;
if (input <= 100000) {
    hasilConvert = input / 100000 + ` ` +`km`
} 
console.log(hasilConvert)

// Soal No 4
let uang: number = 1000000;
let rapih: string = uang.toLocaleString(`id-ID`, {style: `currency`, currency: `IDR`});
console.log(rapih);

// Soal No 5

let text: string = `Hello World`;
let search: string = `H`; 
let hasil: string = text.replace(search, "");
console.log(hasil);


// Soal No 6
let kalimat: string = `sweet home`
let pilihan: string = kalimat.replace(/\b\w/g, char => char.toUpperCase());
console.log(pilihan);

// Soal No 7
let TXT : string = `The QuiCk brOwN Fox`;
function swapCase(str: string): string {
    return str
        .split('')
        .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
        .join('');
}
let hasilTXT: string = swapCase(TXT);
console.log(hasilTXT);


// Soal No 8

const num1 = 42;
const num2 = 27;
const largest = findLargest(num1, num2);
function findLargest(num1: number, num2: number): number {
    return Math.max(num1, num2);
}
console.log(largest);

// Soal No 9
const Uno = 42;
const Dos = 27;
const Quatro = 18;
const sortedNumbers = sortThreeNumbers(Uno, Dos, Quatro);
function sortThreeNumbers(num1: number, num2: number, num3: number): number[] {
    return [num1, num2, num3].sort((a, b) => a - b);
}
console.log(sortedNumbers);

// Soal No 10
function identifyType(input: any): number {
    if (typeof input === 'string') {
        return 1; 
    } }
console.log(identifyType("hello")); 

// Soal No 11
let inputString = 'An apple a day keeps the doctor away';
const result = replaceAWithAsterisk(inputString);
function replaceAWithAsterisk(inputString: string): string {
    return inputString.replace(/a/gi, '*');
}

console.log(result);