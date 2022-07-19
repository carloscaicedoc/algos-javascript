/*  RUNNING SUM OF 1D ARRAY - LeetCode # 1480   

Given an array nums, return a new array with the running sum at each index. 
We define a running sum of and array as: runningSum[i] = sum(num[0]... nums[i])
*/

// Examples: 
const nums1 = [3, 1, 2, 10, 1];
const expected1 = [3, 4, 6, 16, 17];

const nums2 = [2, 4, 6, 8, 10];
const expected2 = [2, 6, 12, 20, 30];

const nums3 = [3, 6, 15, 24, 30, 12];
const expected3 = [3, 9, 24, 48, 78, 90];

// Solution: 
// * Time complexity = O(n)
// * Space complexity = O(1) 
let runningSum = function (nums) {
    let results = new Array(nums.length);

    results[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        results[i] = nums[i] + results[i - 1]
    }
    return results;
}

// Test cases:
console.log(runningSum(nums1))
console.log(runningSum(nums2))
console.log(runningSum(nums3))

// Alternative Solution 2. Overwritten Input (Use carefully, could cause weird behaviours).
// * Time complexity = O(n)
// * Space complexity = O(1)
let runningSum2 = function (nums) {

    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1]
    }
    return nums;
}

// Alternative Solution 3 - .push O(n)
let runningSumArray2 = function (nums) {
    let results = [];
    results.push(nums[0]);

    for (let i = 1; i < nums.length; i++) {
        let prevRunSum = results[results.length - 1];
        results.push(nums[i] + prevRunSum);
    }

    return results;
}

// Alternative Solution 4. Naive Approach. O(n2)
let runningSumArray = function (nums) {
    let runSumArr = [];

    for (let i = 0; i < nums.length; i++) {
        let j = 0;
        let currSum = 0;
        while (j <= i) {
            currSum += nums[j];
            j++;
        }
        runSumArr.push(currSum);
    }

    return runSumArr;
}