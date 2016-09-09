/*
The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

73167176531330624919225119674426574742355349194934
96983520312774506326239578318016984801869478851843
85861560789112949495459501737958331952853208805511
12540698747158523863050715693290963295227443043557
66896648950445244523161731856403098711121722383113
62229893423380308135336276614282806444486645238749
30358907296290491560440772390713810515859307960866
70172427121883998797908792274921901699720888093776
65727333001053367881220235421809751254540594752243
52584907711670556013604839586446706324415722155397
53697817977846174064955149290862569321978468622482
83972241375657056057490261407972968652414535100474
82166370484403199890008895243450658541227588666881
16427171479924442928230863465674813919123162824586
17866458359124566529476545682848912883142607690042
24219022671055626321111109370544217506941658960408
07198403850962455444362981230987879927244284909188
84580156166097919133875499200524063689912560717606
05886116467109405077541002256983155200055935729725
71636269561882670428252483600823257530420752963450

Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

Answer = 23514624000
RunTime = 0.017 seconds
*/

let start = new Date(); // Start the clock

let fs = require("fs");
fs.readFile("number.txt", "utf8", function(err, fileData) {
    if (err) {
        return console.log(err);
    }
    findGP(fileData.trim());
    console.log("RunTime = " + ((new Date() - start) / 1000) + " seconds "); // Print out RunTime
});

function findGP(data) {
	let result = lineToProduct(data.replace(/(?:\r\n|\r|\n)/g,""));
  console.log(result.digits + " makes the greatest product which is " + result.product);
}

function lineToProduct(number) {
    number = number.split("");
    let greatestProduct = 0;
    let digitsOfGP = [];
    let runningLast = []

    let lim = 13;

    number.forEach(function(element, index, array) {
        if (index < lim) {
            runningLast[index] = element;
            //console.log(runningLast);
        } else {
            let product = runningLast.reduce(function(product, cur) {
                return product * cur;
            }, 1);
            //console.log("product: " + product);
            if (product > greatestProduct) {
                greatestProduct = product;
                digitsOfGP = runningLast.reduce(function(fin, cur) {
                    return fin + cur;
                }, "");
                //console.log("New GP = " + greatestProduct);
                //console.log("New DOGP = " + digitsOfGP);
            }
            for (let i = 0; i < lim - 1; i++) {
                runningLast[i] = runningLast[i + 1];
            }
            runningLast[runningLast.length - 1] = element;
						//console.log(runningLast);
        }
    });
    //console.log(digitsOfGP + " makes the greatest product which is " + greatestProduct);
    let result = {
      digits: digitsOfGP,
      product: greatestProduct
    }
    return(result);
}
