/* FIRST NON - CONSECUTIVE

Given an array of integers, return the first non-consecutive integer 
- a non-consecutive integer is one that is NOT exactly 1 larger
than the previous number

*/

const nums1 = [];
const expected1 = null;

const nums2 = [1, 2, 3, 4, 6, 7, 8];
const expected2 = 6;

const nums3 = [1, 4, 5, 6];
const expected3 = 4;

const nums4 = [4, 5, 6, 7, 9];
const expected4 = 9;

// Solution 
const firstNonConsecutive = (nums) => {
    // Edge Cases:
    if (nums.length === 0) return null

    if (nums.length === 1) return null

    // Loop through the array starting at the second position (index[1]). 
    for (let i = 1; i < nums.length; i++) {
        // Compare current & previous numbers. 
        if (nums[i] !== nums[i - 1] + 1) {
            return nums[i];
        }
    }
    return null;
}

// Test Cases: 
console.log(firstNonConsecutive(nums2))
console.log(firstNonConsecutive(nums3))
console.log(firstNonConsecutive(nums4))

// Solution 2 - Similar Approach
function firstNonConsecutive2(nums) {
    for (let i=1; i < nums.length; i++) {
        const prevNum = nums[i -1];
        const currNum = nums[i];
        
        if (prevNum + 1 !== currNum) {
            return currNum;
        }
    }
    return null;
}

// Test Cases: 
console.log(firstNonConsecutive2(nums1))
console.log(firstNonConsecutive2(nums2))
console.log(firstNonConsecutive2(nums3))
console.log(firstNonConsecutive2(nums4))
