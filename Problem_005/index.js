/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

Answer = 232792560
RunTime = ~3 seconds
*/

let start = new Date(); // Start the clock

let done = false;
let counter = 0;
while(!done) {
	counter++;
	let good = true;
	for(let i = 1; i <= 20; i++) {
		if(counter % i !== 0) {
			good = false;
			break;
		}
	}
	done = good;
}

console.log(counter);


console.log((new Date() - start) / 1000); // Print out RunTime
