function reverseWordsInString(str) {
    // Split the string into words
    const words = str.split(' ');
    
    // Reverse each word
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    
    // Join the reversed words back into a single string
    return reversedWords.join(' ');
}

// Example usage
const input = "my name is raja";
const result = reverseWordsInString(input);
console.log(result); // Output: "ym eman si ajar"
