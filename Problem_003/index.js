/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

Answer = 6857
RunTime = ~50 seconds
*/

let start = new Date();

let num = 600851475143;

let primes = [];
let stoppingPoint = Math.floor(Math.sqrt(num));

for (let i = 3; i < stoppingPoint; i += 2) {
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
}

let factors = primes.filter(function(num) {
	if (600851475143 % num === 0) {
		return true;
	}
});

console.log("Final Answer = " + factors[factors.length - 1]);
console.log((new Date() - start) / 1000);
