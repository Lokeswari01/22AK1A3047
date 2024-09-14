function printEvenLengthSubstrings(inputString) {
    let words = inputString.split(' ');
    for (let word of words) {
        if (word.length % 2 === 0) {
            console.log(word);
        }
    }
}

// Example usage:
let inputString = "sun rises in the east";
printEvenLengthSubstrings(inputString);


