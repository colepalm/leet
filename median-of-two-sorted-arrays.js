/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let combinedLength = nums1.length + nums2.length - 1;
    let nums1Length = nums1.length - 1;
    let nums2Length = nums2.length - 1;

    while (combinedLength >= 0) {
        if (nums2Length < 0 || nums1Length >= 0 && nums1[nums1Length] > nums2[nums2Length]) {
            nums1[combinedLength--] = nums1[nums1Length--];
        } else {
            nums1[combinedLength--] = nums2[nums2Length--];
        }
    }

    combinedLength = nums1.length;
    if (combinedLength % 2 === 0) {
        return ((nums1[(combinedLength/2)] + nums1[(combinedLength/2)-1]) / 2)
    } else {
        return nums1[(combinedLength-1)/2];
    }
};

// console.log(findMedianSortedArrays([1,3], [2]))
console.log(findMedianSortedArrays([1,2], [3,4]))
// console.log(findMedianSortedArrays([0,0], [0,0]))
// console.log(findMedianSortedArrays([], [1]))
// console.log(findMedianSortedArrays([2], []))

