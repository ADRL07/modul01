// Soal No 1

function body_massindex(weightA: number, heightA: number) {
    const body_result = weightA / (heightA * heightA);

    if (body_result <= 18.5) {
        return "Less Weight"
    } else if (body_result > 18.5 && body_result <= 24.9 ) {
        return "Ideal"
    } else if (body_result >= 25.0 && body_result <= 29.9 ) {
        return "Overweight"
    } else if (body_result >= 30.0 && body_result <= 39.9 ) {
        return "Very Overweight"
    } else {
        return "Obesity"
    }
}

console.log(body_massindex(65, 1.7)); 


// Soal No 2

function fizzBuzz(n: number) {
    const result: (string | number)[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push(`FizzBuzz`);
        } else if (i % 3 === 0) {
            result.push(`Fizz`);
        } else if (i % 5 === 0) {
            result.push(`Buzz`);
        } else {
            result.push(i);
        }
    }
    return result.join();
}
console.log(fizzBuzz(8))