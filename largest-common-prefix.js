/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let furthestIndex = -1;
    if (strs.length > 1) {
        for (let i = 1; i < strs.length; i++) {
            let currentIndex = -1;
            for (let j = 0; j < strs[i].length; j++) {
                if (strs[i].charAt(j) === strs[0].charAt(j))
                    currentIndex = j
                else
                    break;
            }
            if (furthestIndex < 0) {
                if (currentIndex < 0)
                    break;
                else furthestIndex = currentIndex;
            }

            if (currentIndex < furthestIndex) {
                furthestIndex = currentIndex;
            }
        }
        return strs[0]?.slice(0, furthestIndex + 1);
    } else return strs[0] || '';
};
