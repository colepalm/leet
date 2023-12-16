/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) { return 0; }
    if (dividend === divisor) { return 1; }
    if (dividend === -divisor) { return -1; }
    if (divisor === 1 || divisor === -1) {
        if (divisor < 0 && dividend < 0) { return -dividend-1 }
        else if (divisor > 0 && dividend > 0) { return dividend }
        else if (dividend < 0) { return dividend; }
        else return -dividend
    }
    if (dividend < 0 && divisor < 0) {
        return positiveNumbers(dividend, divisor)
    } else if (dividend > 0 && divisor > 0) {
        return positiveNumbers(dividend, divisor)
    } else return negativeNumbers(dividend, divisor)
};

var positiveNumbers = function(dividend, divisor) {
    let count = 0;
    if (dividend < 0) {
        dividend = -dividend;
        divisor = -divisor
    }
    let total = divisor;
    while (total <= dividend) {
        count++;
        total = total + divisor;
    }
    return count;
}

var negativeNumbers = function(dividend, divisor) {
    let count = 0;
    if (dividend < 0) {
        divisor = -divisor;
    } else {
        dividend = -dividend
    }
    let total = divisor;
    while (total >= dividend) {
        count--;
        total = total + divisor;
    }
    return count;
}

// console.log(divide(10, 3))
// console.log(divide(7, -3))
// console.log(divide(-2147483648, -1))
console.log(divide(-2147483648, 2))
