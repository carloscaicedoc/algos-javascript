/*
MAX CONSECUTIVE ONES
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

const nums1 = [1, 1, 0, 1, 1, 1];
const expected1 = 3;

const nums2 = [1, 0, 1, 1, 0, 1];
const expected2 = 2;

const nums3 = [1, 1, 1, 0, 0, 1, 1, 1, 1];
const expected3 = 4;

// Solution
const findMaxConsecutiveOnes = (nums) => {
    let max = 0;
    let count = 0;

    if (nums.length === 1 && nums[0] === 1) {
        return 1;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1 && nums[i - 1] !== 1 || i === 0 && nums[i] == 1) {
            count = 1;
            max = Math.max(max, count)
        } else if (nums[i] === 1 && nums[i] === nums[i - 1]) {
            count += 1;
            max = Math.max(max, count)
        } else {
            count = 0;
        }
    }
    return max;
}


// Test Cases:
console.log(findMaxConsecutiveOnes(nums1))
console.log(findMaxConsecutiveOnes(nums2))
console.log(findMaxConsecutiveOnes(nums3))