/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = '';
    let romanMap = [
        { 1: 'I' },
        { 4: 'IV' },
        { 5: 'V' },
        { 9: 'IX' },
        { 10: 'X' },
        { 40: 'XL' },
        { 50: 'L' },
        { 90: 'XC' },
        { 100: 'C' },
        { 400: 'CD' },
        { 500: 'D' },
        { 900: 'CM' },
        { 1000: 'M' },
    ];

    while(num > 0) {
        const obj = findLesserNumber(num, romanMap);
        const value = Object.keys(obj)[0];
        const romanVal = Object.values(obj)[0];
        roman += romanVal;
        num = num - value;
    }

    return roman;
};

var findLesserNumber = function(num, romanMap) {
    const reversed = romanMap.slice().reverse();

    for(let i = 0; i < reversed.length; i++) {
        const value = Object.keys(reversed[i])[0];
        if (num >= value) {
            return reversed[i];
        }
    }
}

console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))
