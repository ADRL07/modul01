let numb: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result: number[] = [];
for (let i: number = 0; i < numb.length; i++) {
    if (numb[i] % 2 === 0) {
        result = result.concat(numb[i]);
    } 
}
console.log(result);
