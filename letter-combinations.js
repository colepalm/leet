/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let combinations = [];
    let letterPosition = 0;
    for (let i = 0; i < digits.length; i++) {
        letterPosition = 0;
        let count = 2;
        while(count > -1) {
            const actualNumber = (digits[i] - 1) * 3;
            const letter = alphabet.charAt(actualNumber - count)
            if (i === 0) {
                combinations.push(letter)
            } else {
                combinations[letterPosition] = combinations[letterPosition] += letter;
                letterPosition++;
            }
            count--;
        }
    }
    return combinations;
};

const alphabet='abcdefghijklmnopqrstuvwxyz'

console.log(letterCombinations("23"))

