/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    const length = num1.length + num2.length;
    const arr = new Array(length).fill(0)
    for (let i = num2.length - 1; i > -1; i--) {
        for (let j = num1.length - 1; j > -1; j--) {
            const mul = (num2[i] - '0') * (num1[j] - '0');
            const sum = mul + arr[i + j + 1];
            arr[i + j + 1] = sum % 10;
            arr[i + j] += Math.floor(sum / 10);
        }
    }

    return arr.join('').replace(/^0+/, '') || '0';
};

console.log(multiply("34", "41"))
