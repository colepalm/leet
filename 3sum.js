/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (nums.length < 3) return []

    const sorted = nums.sort((a, b) => a - b);
    let triplets = [];

    for (let i = 0; i < sorted.length; i++) {
        if (sorted[i - 1] && sorted[i - 1] === sorted[i]) {
            break;
        }

        let reverseSubtract = 0;

        do {
            reverseSubtract++;

            if (i === sorted.length - reverseSubtract - 1) {
                break;
            }
            let total = sorted[i] + sorted[sorted.length - reverseSubtract];
            let slice = sorted.slice(i + 1, sorted.length - reverseSubtract);

            let found = slice.find(el => el === -total)

            if ((found || found === 0)) {
                let match = triplets.find(el =>
                    el.toString() === [sorted[i], sorted[sorted.length - reverseSubtract], found].toString());
                if (!match)
                    triplets.push([sorted[i], sorted[sorted.length - reverseSubtract], found]);
            }
        } while (sorted[i] !== sorted[sorted.length - reverseSubtract])
    }

    return triplets;
};

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([]))
console.log(threeSum([0]))
console.log(threeSum([0,0,0]))
console.log(threeSum([0,0,0,0]))
console.log(threeSum([1,2,-2,-1]))
