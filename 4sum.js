/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let next = j + 1;
            let end = nums.length - 1;

            while (end > next) {
                let sum = nums[i] + nums[j] + nums[next] + nums[end];

                if (sum === target) {
                    result.push([nums[i], nums[j], nums[next], nums[end]]);
                    while(nums[next] === nums[next+1]) next++;
                    while(nums[end] === nums[end-1]) end--;
                    next++;
                    end--;
                } else if (sum < target) {
                    next++;
                } else if (sum > target) {
                    end--;
                }
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    }

    return result;
};

console.log(fourSum([1,0,-1,0,-2,2], 0))
console.log(fourSum([2,2,2,2,2], 8))
