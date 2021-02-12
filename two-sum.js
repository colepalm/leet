/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (const [index, num] of nums.entries()) {
        for (const [innerIndex, innerNum] of nums.slice(index + 1).entries()) {
            if (num + innerNum === target)
                return [index, innerIndex + index + 1]
        }
    }
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6))
console.log(twoSum([3,3], 6))