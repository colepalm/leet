/**
 Note to self for later: This is a sorting problem. You need to break down each slice into a increasingly smaller chunks by the smallest number in the slice.
 */

/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleArea = function (heights) {
    const largestIndex = heights.reduce((max, current, index, array) => current > array[max] ? index : max, 0);
    const verticalRectangle = getVerticalRectangle(heights, largestIndex);
    const horizontalRectangle = getHorizontalRectangle(heights);

    return verticalRectangle >= horizontalRectangle ? verticalRectangle : horizontalRectangle;
};

const getVerticalRectangle = function (heights, largestIndex) {
    const behind = heights[largestIndex - 1] ?? 0;
    const ahead = heights[largestIndex + 1] ?? 0;

    if (behind === ahead) {
        if (behind === 0) {
            return heights[largestIndex];
        }

        return heights[largestIndex - 1] * 3;
    }

    return behind > ahead ? behind * 2 : ahead * 2;
}

const getHorizontalRectangle = function (heights) {
    let previousLast = 0;
    let splitArrays = [];
    let splitArrayValues = [];
    for (const [index, value] of heights.entries()) {
        if (value === 0 || index === heights.length - 1) {
            splitArrays.push(heights.split(previousLast, index));
            previousLast = index + 1;
        }
    }

    for (const [index, value] of splitArrays.entries()) {

    }
}

console.log(largestRectangleArea([2,4]))