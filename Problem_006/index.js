/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

Answer = 25164150
RunTime = <1 second
*/

let start = new Date(); // Start the clock

let nLimit = 100;
let sumOfSquares = 0;
let squareOfSums = 0;
for (let i = 1; i <= nLimit; i++) {
    sumOfSquares += Math.pow(i, 2);
    squareOfSums += i;
}
squareOfSums = Math.pow(squareOfSums, 2);
console.log(squareOfSums - sumOfSquares);
console.log((new Date() - start) / 1000); // Print out RunTime
