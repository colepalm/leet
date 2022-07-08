/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    // stores all combinations
    let combinations = [];
    // maintains current level position
    let letterPosition = 0;
    // number of times each digit needs to get printed
    let print = 3 ** (digits.length - 1);
    for (let i = 0; i < digits.length; i++) {
        // current position on number
        letterPosition = 0;
        // every number has 3 letters
        let count = 2;
        while(count > -1) {
            // tracks max number of character on a number pad digit
            const actualNumber = (digits[i] - 1) * 3 - 1;
            const letter = alphabet.charAt(actualNumber - count)
            if (i === 0) {
                for (let j = 0; j < print; j++) {
                    combinations.push(letter)
                }
            } else {
                for (let j = 0; j < print; j++) {
                    combinations[letterPosition + (j * 3)] = combinations[letterPosition + (j * 3)] += letter;
                }
                letterPosition++;
            }
            count--;
        }
    }
    return combinations;
};

const alphabet='abcdefghijklmnopqrstuvwxyz'

console.log(letterCombinations("23"))

