/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    let matchedIndex = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.charAt(i) === needle.charAt(0)) {
            matchedIndex = i;
            for (let j = 0; j < needle.length; j++) {
                if (haystack.charAt(i+j) !== needle.charAt(j)) {
                    matchedIndex = -1;
                    break;
                }
            }
            if (matchedIndex > -1) break;
        }
    }
    return matchedIndex;
};

console.log(strStr("hello", "ll"))
console.log(strStr("aaaaa", "bba"))
console.log(strStr("", ""))
