/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (dividend === 0) { return 0; }
    let isNegative = false;
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) { isNegative = true; }

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    if (dividend === divisor) { if (isNegative) { return -1; } }

    let count = 0
    while (divisor <= dividend) {
        let value = divisor
        let multiple = 1
        while (value + value <= dividend) {
            value += value
            multiple += multiple
        }
        dividend = dividend - value
        count += multiple
    }

    if (count > ((2**31) - 1)) {
        return isNegative ? -(2**31) : 2**31 - 1
    }

    if (isNegative) { return -count; }
    return count;
};

// console.log(divide(10, 3))
// console.log(divide(7, -3))
// console.log(divide(-2147483648, -1))
// console.log(divide(521521, -3))
console.log(divide(1, -1))
