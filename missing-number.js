/*
MISSING NUMBER
Given an array nums containing n distinct numbers in the range [0, n], 
return the only number in the range that is missing from the array.
*/

const nums1 = [3,0,1];
const output1 = 2;

const nums2 = [0,1];
const output2 = 2;

const nums3 = [9,6,4,2,3,5,7,0,1];
const output3 = 8;

const nums4 = [2,1,4,3,7,6,0];
const output4 = 5;

// Solution: Sorting array
let missingNumberSorted = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    if (nums[n - 1] !== n) {
        return n;
    }

    if (nums[0] !== 0) {
        return 0;
    }

    for (let i = 1; i < n; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return -1;
}

// Test Cases:
console.log(missingNumberSorted(nums1));
console.log(missingNumberSorted(nums2));
console.log(missingNumberSorted(nums3));
console.log(missingNumberSorted(nums4));

// Solution 2: Sorting Alternative
let missingNumberSorted2 = function(nums) {
    nums.sort((a, b) => a - b);
    let n = nums.length;

    if (nums[n - 1] !== n) {
        return n;
    }

    if (nums[0] !== 0) {
        return 0;
    }

    for (let i = 1; i < n; i++) {
        let expedtedNum = nums[i - 1] + 1;
        if (nums[i] !== expedtedNum) {
            return expedtedNum;
        }
    }

    return -1;
}

// Solution 3: Create range array - Brute force approach
let missingNumber = function(nums) {
    let rangeArray = []; 

    for (let i = 0; i <= nums.length; i++) {
        rangeArray.push(i)
    }

    for (const number of rangeArray ) {
        if (!nums.includes(number)) {
            return number;
        }
    }
    return -1;
}