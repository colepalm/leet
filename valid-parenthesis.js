/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let tape = '';
    const startChar = '({['
    const endChar = ')}]'
    for (const char of s) {
        const endIndex = endChar.indexOf(char);
        if (endIndex > -1) {
            if (tape.length && startChar.indexOf(tape.slice(-1)) === endIndex) { tape = tape.slice(0, -1); }
            else { return false; }
        } else { tape += char; }
    }
    return !tape.length;
};

console.log(isValid(")(){}"))
// console.log(isValid("()[]{}"))
// console.log(isValid("(]"))
// console.log(isValid("([)]"))
// console.log(isValid("{[]}"))
