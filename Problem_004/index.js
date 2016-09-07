/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.

Answer = 906609
*/

let start = new Date();

let biggest = 0,
	bigI = 0,
	bigJ = 0;

let isPalindrome = function(num) {
	return num.toString() === num.toString().split("").reverse().join("");
}

for (let i = 0; i <= 999; i++) {
	for (let j = 0; j <= 999; j++) {
		if (isPalindrome(i * j)) {
			if (i * j > biggest) {
				biggest = i * j;
				bigI = i;
				bigJ = j;
				console.log("c = " + biggest);
				console.log("BigI = " + bigI);
				console.log("BigJ = " + bigJ);
			}
		}
	}
}

console.log("Final Answer = " + biggest);
console.log("BigI = " + bigI);
console.log("BigJ = " + bigJ);
