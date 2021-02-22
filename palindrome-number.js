/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const xString = '' + x;
    return xString === xString.split('').reverse().join('');
};