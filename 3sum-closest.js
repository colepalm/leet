function threeSumClosest(nums, target) {
    // obviously irrelevant if we don't have at least 3 numbers to play with!
    if (nums.length < 3) return 0;

    // having the numbers in ascending order will make this problem much easier.
    // also, knowing the overall problem  will take at least O(N^2) time, we can
    // afford the O(NlogN) sort operation
    nums = nums.sort((a, b) => a - b)

    let closest = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let j = i + 1

        let k = nums.length - 1

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k]
            if (sum === target) return target

            closest = Math.abs(sum - target) < Math.abs(closest - target) ? sum : closest

            if (sum < target) {
                j++;
                while (j < k && nums[j] === nums[j - 1]) {
                    j++;
                }
            } else {
                k--;
                while (j < k && nums[k] === nums[k+1]) {
                    k--;
                }
            }
        }
    }

    return closest
}

// console.log(threeSumClosest([-1,2,1,-4], 1))
// console.log(threeSumClosest([1,1,1,1], 0))
console.log(threeSumClosest([0,2,1,-3], 1))
