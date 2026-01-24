/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let count = 0;
    if (digits[digits.length - 1] !== 9) {
        digits[digits.length - 1]++;
        return digits
    }
    digits[digits.length - 1] = 0;
    count++;
    for (var i = digits.length - 2; i >= 0; i--) {
        if (digits[i] !== 9) {
            digits[i]++
            return digits;
        } else {
            digits[i] = 0;
            count++
        }
    }
    if (count === digits.length) {
        digits.unshift(1);
    }
    return digits;
}

console.log(plusOne([9]))
