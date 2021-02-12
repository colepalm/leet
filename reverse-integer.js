/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let str = '' + Math.abs(x);
    str = str.split('').reverse().join('');
    let reverse =  x < 0 ? `-${str}` : str;
    reverse = parseInt(reverse);
    if (reverse < ((-2) ** 31)) return 0;
    if (reverse > ((2 ** 31) - 1)) return 0;
    return reverse;
};

console.log(reverse(1534236469))
