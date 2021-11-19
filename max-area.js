/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        const minHeight = Math.min(height[i], height[j]);
        const area = minHeight * (j - i);
        if (area > max) max = area

        if (height[i] < height[j]) i++
        else j--
    }

    return max;
};

console.log(maxArea([1,1]))
console.log(maxArea([4,3,2,1,4]))
console.log(maxArea([1,2,1]))
