// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 0 and 1 are not prime numbers
    if (num <= 3) return true;  // 2 and 3 are prime numbers
    if (num % 2 === 0 || num % 3 === 0) return false; // Multiples of 2 and 3 are not primes
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to print all prime numbers in a given range
function printPrimesInRange(from, to) {
    if (from > to) {
        console.log("Invalid range. 'from' should be less than or equal to 'to'.");
        return;
    }
    
    for (let num = from; num <= to; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}

// Example usage
const from = 10;
const to = 50;

printPrimesInRange(1,100);
