// Pertanyaan slide 3
// Soal 1
const randomNumber: number = 7;

for (let i: number = 0; i <= 10; i++) {
    console.log (`${randomNumber} X ${i} = ${randomNumber * i}`);

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
let search: string = `hello`; 
let text: string = `Hello World`;
let newText: string = text.replace(search , '');
    console.log(newText);


// Soal No 6
let kalimat: string = `sweet home`
console.log(kalimat.toUpperCase());
