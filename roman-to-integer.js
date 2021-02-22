/**
 * @param {string} s
 * @return {number}
 */

const romanMap = new Map([
    ['I',             { value: 1, rank: 1, subtractable: true } ],
    ['V',             { value: 5, rank: 2, subtractable: false } ],
    ['X',             { value: 10, rank: 3, subtractable: true } ],
    ['L',             { value: 50, rank: 4, subtractable: false } ],
    ['C',             { value: 100, rank: 5, subtractable: true } ],
    ['D',             { value: 500, rank: 6, subtractable: false } ],
    ['M',             { value: 1000, rank: 7, subtractable: false } ],
])

var romanToInt = function(s) {
    let total = 0;
    let toSkip = false;
    for (const [index, numeral] of [...s].entries()) {
        if (toSkip) {
            toSkip = false;
            continue;
        }
        if (
            romanMap.get(numeral).subtractable &&
            s[index + 1] &&
            (
                romanMap.get(s[index + 1]).rank === romanMap.get(numeral).rank + 1 ||
                romanMap.get(s[index + 1]).rank === romanMap.get(numeral).rank + 2
             )

        ) {
            total += romanMap.get(s[index + 1]).value - romanMap.get(numeral).value;
            toSkip = true;

        } else {
            total += romanMap.get(numeral).value
        }
    }
    return total;
};

console.log(romanToInt("MCMXCIV"));