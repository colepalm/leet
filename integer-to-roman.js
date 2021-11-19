/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let numReverse = [...num.toString()].reverse();
    let roman = '';
    let romanMap = {
        1: 'I',
        5: 'V',
        10: 'X',
        50: 'X',
        100: 'C',
        500: 'D',
        1000: 'M',
    }

    numReverse.forEach((char, index) => {
        let digit = parseInt(char);
        if (digit >= 5) {
            let multiplier = 1;
            if (digit === 9) { digit += 1; }
            else if (digit === 5) { multiplier = 2; }
            else {
                
            }
            digit = roundDigitUp(digit, index);
            roman = romanMap[(digit * multiplier) / 10] + romanMap[digit] + roman;
        }
    });

    return roman;
};

var roundDigitUp = function(digit, index) {
    while (index > 0) {
        digit = digit * 10;
        index--;
    }
    return digit;
}

// console.log(intToRoman(3))
// console.log(intToRoman(4))
console.log(intToRoman(9))
// console.log(intToRoman(58))
// console.log(intToRoman(1994))
