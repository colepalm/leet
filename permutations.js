/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let permutations = [];
    let used = new Array(nums.length).fill(false);
    let path = [];

    var recurse = function() {
        if (used.length === path.length) {
            const found = permutations.find((element) => {
                return arraysEqual(element, path)
            })

            if (!found)
                permutations.push([...path]);

            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue;

            path.push(nums[i]);
            used[i] = true;
            recurse();
            path.pop();
            used[i] = false;
        }
    }

    recurse();
    return permutations;
};

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

console.log(permute([1,1,3]));
