/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    var result = []

    candidates.sort((a, b) => a - b);

    const backtrack = (start, total, path) => {
        if (total === target) {
            result.push([...path]);
            return;
        }

        for (let i = start; i < candidates.length; i++) {
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            const newTotal = total + candidates[i];
            if (newTotal > target) break;

            path.push(candidates[i]);
            backtrack(i + 1, newTotal, path);
            path.pop();
        }
    }

    backtrack(0, 0, []);
    return result;
};

console.log(combinationSum2([10,1,2,7,6,1,5], 8))
