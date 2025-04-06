/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    var result = []

    var makeCombination = function(index, total, combination) {
        if (target === total) {
            result.push([...combination])
            return
        }

        if (total > target || index > candidates.length - 1) {
            return;
        }

        combination.push(candidates[index]);
        makeCombination(index, total + candidates[index], combination)
        combination.pop();
        makeCombination(index + 1, total, combination)
    }

    makeCombination(0, 0, []);

    return result;
};

console.log(combinationSum([2,3,6,7], 7));
