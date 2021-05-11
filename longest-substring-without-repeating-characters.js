/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {};
    let left = 0;
    let max = 0;

    for (let i = 0; i < s.length; i++) {
        left = map[s[i]] >= left ? map[s[i]] + 1 : left;
        map[s[i]] = i;
        max = Math.max(max, i - left + 1)
    }

    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(''));
console.log(lengthOfLongestSubstring(' '));
console.log(lengthOfLongestSubstring('aab'));
console.log(lengthOfLongestSubstring('dvdf'));

