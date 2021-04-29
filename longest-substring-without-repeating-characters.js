/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    return recurseString(s, 0);
};

/**
 * @param {string} s
 * @param {number} toMatch
 * @return {number}
 */
var recurseString = function(s, toMatch) {
    let covered = new Set();
    let longest = 0;
    for (let i = 0; i < s.length; i++) {
        if (covered.has(s.charAt(i))) {
            if (covered.size > longest) {
                longest = covered.size;
            }
            covered = new Set();
            covered.add(s.charAt(i));
        } else {
            covered.add(s.charAt(i));
        }
    }
    let withoutFront = 0;
    if (s.length > toMatch) {
        withoutFront = recurseString(s.substr(1), Math.max(longest, covered.size, toMatch))
    }
    return Math.max(longest, covered.size, withoutFront);
}

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));

