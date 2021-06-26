/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = '';
    // iterate over string
    for (let i = 0; i < s.length; i++) {
        // handle two cases
        //  1. where palindrome has 1 center character "aba"
        //  2. where palindrome has 2 center characters "abba"
        for (let j = 0; j < 2; j++) {
            let left = i;
            let right = i + j;

            // check if left and right match
            while (s[left] && s[right] && s[left] === s[right]) {
                left--;
                right++;
            }

            if ((right - left - 1) > max.length) {
                max = s.substring(left + 1, right)
            }
        }
    }

    return max;
};

// console.log(longestPalindrome("babad"))
// console.log(longestPalindrome("cbbd"))
console.log(longestPalindrome("a"))
// console.log(longestPalindrome("ac"))
console.log(longestPalindrome("cbbd"))
