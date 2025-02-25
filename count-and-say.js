/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return '1'
    }

    let arr = recurse(n - 1, ['1'])
    return arr.join('')
};

/**
 * @param {number} n
 * @param {string[]} iter
 * @return {string[]}
 */
var recurse = function(n, iter) {
    if (n === 0) return iter;
    let newArray = [];
    for (let i = 0; i < iter.length;) {
        let j = 1;
        while (iter[i] === iter[i+j]) {
            j++;
        }
        newArray.push(`${j}`)
        newArray.push(`${iter[i]}`);
        i+=j
    }
    return recurse(n - 1, newArray);
}

console.log(countAndSay(5))
console.log(countAndSay(4))
