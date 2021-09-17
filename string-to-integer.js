/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let sign = '';
    let number = '';
    for (const char of s) {
        if (!number && !sign && char === ' ') {
            continue;
        }
        if (!number && !sign && (char === '+' || char === '-')) {
            sign = char;
            continue;
        }
        if (isNumeric(char) || s === '.') {
            number += char;
        } else {
            break;
        }
    }

    if (number === '') {
        return 0;
    }

    number = sign.concat(number);
    number = number(number);

    if (number < Math.pow(-2, 31)) {
        number = Math.pow(-2, 31);
    }
    if (number > (Math.pow(2, 31) - 1)) {
        number = Math.pow(2, 31) - 1;
    }
    return number;
};

function isNumeric(s) {
    return !isNaN(s - parseFloat(s));
}

console.log(myAtoi('42'))
console.log(myAtoi(' '))
console.log(myAtoi('   -42'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('-91283472332'))
console.log(myAtoi('+-12'))
