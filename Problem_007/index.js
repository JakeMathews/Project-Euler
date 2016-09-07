/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

Answer = 104743
RunTime = ~1.4 seconds
*/

let start = new Date(); // Start the clock

let primes = [2];
let i = 3;
let done = false
while(!done) {
	for (let j = 3; j <= 9; j++) {
		if (i % j === 0 && i !== j) {
			break;
		}
		if (j === 9) {
			let good = true;
			primes.forEach(function(element, index, array) {
				if (i % element === 0) {
					//console.log("invalid prime: " + i + " % " + element);
					good = false;
					return;
				}
			});
			if (good) {
				//console.log("found prime: " + i);
				primes.push(i);
			}
		}
	}
  i+=2;
  if(primes.length === 10001) {
    done = true;
  }
}
console.log(primes[primes.length-1]);

console.log((new Date() - start) / 1000); // Print out RunTime
