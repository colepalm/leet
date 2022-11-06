/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var ans = [];
    var generate = function(A = [], left = 0, right = 0) {
        if (A.length === n * 2) {
            ans.push(A.join(""))
        }
        if (left < n) {
            A.push('(')
            generate(A, left + 1, right)
            A.pop()
        }
        if (right < left) {
            A.push(')')
            generate(A, left, right + 1)
            A.pop()
        }
    }
    generate();
    return ans;
};

console.log(generateParenthesis(3))
