/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var decodeAtIndex = function(S, K) {
    let tape = '';

    const letter = new RegExp('[a-zA-Z]');
    const digit = new RegExp('[1-9]');
    for (const char of S) {
        if (tape.length > K - 1) {
            break;
        }
        if (letter.test(char)) {
            tape += char;
        }
        if (digit.test(char)) {
            let repeat = char;
            let partial = tape;
            while (repeat > 1) {
                tape += partial;
                repeat--;
            }
        }
    }

    return tape.charAt(K - 1);
};

console.log(decodeAtIndex('a2345678999999999999999', 1))