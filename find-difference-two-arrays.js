/*
- FIND THE DIFFERENCE OF TWO ARRAYS

Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:
answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
Note that the integers in the lists may be returned in any order.

*/

const test1A = [1,2,3];
const test1B = [2,4,6];
const expected1 = [[1,3], [4,6]]

const test2A = [1,2,2,3];
const test2B = [1,1,2,2];
const expected2 = [[3], []];

const findDifference = (nums1, nums2) => {
    let arrOne = [];
    let arrTwo = [];
    let result = [];

    for (const num of nums1) {
        if (nums2.indexOf(num) === -1) {
            arrOne.push(num)
        }
    }
    for (const num of nums2) {
        if (nums1.indexOf(num) === -1) {
            arrTwo.push(num)
        }
    }
    result.push(arrOne)
    result.push(arrTwo)
    return result;
    // return [[...new Set(arrOne)], [...new Set(arrTwo)]]
    return [[...arrOne], [...arrTwo]]

}

// Test Cases:
console.log(findDifference(test1A, test1B));
console.log(findDifference(test2A, test2B));

// Similar Solution: Different Style =>
var findDifference2 = function (nums1, nums2) {
    
    let firstArray = [];
    let secondArray = [];

    nums1.forEach(num => {
        if (nums2.indexOf(num) === -1 ){
            firstArray.push(num);
        }
    });

    nums2.forEach(num => {
        if (nums1.indexOf(num) === -1 ){
            secondArray.push(num);
        }
    });

    // return [[...new Set(firstArray)], [...new Set(secondArray)]];
    return [[...firstArray], [...secondArray]]
};

console.log(findDifference2(test1A, test1B));
console.log(findDifference2(test2A, test2B));

// Solution 3. (!arr.has)
var findDifference3 = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
    const numsArr1 = [];
    const numsArr2 = [];
    
    for (const num of nums1) {
        if (!set2.has(num)) numsArr1.push(num);
    }
    for (const num of nums2) {
        if (!set1.has(num)) numsArr2.push(num);
    }
  
    return [[...new Set(numsArr1)], [...new Set(numsArr2)]];
};