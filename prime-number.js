// Define a function that takes one integer argument and returns logical value true or false depending on if the integer is a prime.
// A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrimeNumber(num) {
    if (num < 2) return false;

    const maxDiv = Math.sqrt(num);
    for (let i = 2; i < maxDiv; i++) {
        if(num % i == 0) {
            return false;
        } 
    }
    return true;
}

// Test Cases:

console.log(isPrimeNumber(-23)) 
console.log(isPrimeNumber(1)) 
console.log(isPrimeNumber(30)) 
console.log(isPrimeNumber(29)) 
console.log(isPrimeNumber(59)) 
console.log(isPrimeNumber(66)) 
console.log(isPrimeNumber(67)) 
console.log(isPrimeNumber(73)) 

// Alternative Solution: 

function isPrime(n) {
    if (n < 2) return false; // Check for negative number, Zero and 1. 
    else if (n <= 3) return true; // 2 and 3 are prime numbers
    else if (n % 2 === 0 || n % 3 === 0) return false; // Even numbers or numbers divisible by 3 are out of the run. 

    for (let i=5; i<Math.sqrt(n); i+=6) {
        if (n % i === 0 || n % (i+2) === 0) {
            return false;
        }
    }
    return true
}

// Test Cases for alternative solution:

console.log(isPrime(7))
console.log(isPrime(11))
console.log(isPrime(13))
console.log(isPrime(17))
console.log(isPrime(29))
console.log(isPrime(31))
console.log(isPrime(61))
console.log(isPrime(-1))
console.log(isPrime(77))