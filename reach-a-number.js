/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function(target) {
    return findOverstep(Math.abs(target), 0, 1, 0);
};

var findOverstep = (target, current, next, steps) => {
    const step = next + 1;
    if (next + current === target) {
        return steps + 1;
    } else if (next + current > target) {
        return findOverstep(target, current - next, step, steps + 1);
    } else {
        return findOverstep(target, current + next, step, steps + 1);
    }
}

console.log(reachNumber(4))