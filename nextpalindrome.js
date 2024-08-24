// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

// Function to find the next palindrome greater than a given number
function nextPalindrome(num) {
    let next = num + 1;
    while (true) {
        if (isPalindrome(next)) return next;
        next++;
    }
}

// Helper function to check if a number is a palindrome
function isPalindrome(num) {
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Main function to process the input
function processNumber(num) {
    if (isPrime(num)) {
        console.log("Prime");
        console.log("Next palindrome:", nextPalindrome(num));
    } else {
        console.log("Non Prime");
    }
}

// Example usage
processNumber(19); // For prime number
processNumber(27); // For non-prime number
