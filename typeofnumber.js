// Function to calculate the sum of proper divisors of a number
function sumOfProperDivisors(num) {
    if (num <= 1) return 0; // Proper divisors of 1 are none, so sum is 0.
    
    let sum = 1; // 1 is always a proper divisor
    const sqrtNum = Math.sqrt(num);
    
    // Iterate from 2 to the square root of num to find divisors
    for (let i = 2; i <= sqrtNum; i++) {
        if (num % i === 0) {
            sum += i; // Add divisor
            if (i !== num / i) { // Avoid adding the square root twice if it's a perfect square
                sum += num / i;
            }
        }
    }
    
    return sum;
}

// Function to determine if a number is abundant, perfect, or deficient
function classifyNumber(num) {
    if (num < 1) {
        throw new Error('Number must be a positive integer');
    }
    
    const sumDivisors = sumOfProperDivisors(num);
    
    if (sumDivisors > num) {
        console.log(`${num} is an Abundant number.`);
    } else if (sumDivisors === num) {
        console.log(`${num} is a Perfect number.`);
    } else {
        console.log(`${num} is a Deficient number.`);
    }
}

// Example usage
const numbers = [6, 12, 15, 28, 1]; // Test with several numbers

numbers.forEach(num => {
    classifyNumber(num);
});
