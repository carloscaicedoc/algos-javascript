/*
FIND NUMBERS WITH EVEN NUMBERS OF DIGITS
Given an array nums of integers, return how many 
of them contain an even number of digits. (From Leetcode. Array chapter)
*/

const nums1 = [12,345,2,6,7896];
const expected1 = 2;

const nums2 = [555,901,482,1771];
const expected2 = 1;

// Solution: Convert number into string.
let findNumbers = function(nums) {
    let evenCounter = 0;

    for (const num of nums) {
        if (num.toString().length % 2 === 0) {
            evenCounter++;
        }
    }

    return evenCounter;
}

console.log(findNumbers(nums1))
console.log(findNumbers(nums2))

// Alternative Solution: (n / 10)
const findNumbers2 = (nums) => {
    let evenCounter = 0;
    
    for (const num of nums) {
        let count = 0;
        let n = num;

        while (n !== 0) {
            n = Math.floor(n / 10);
            count++;
        }
        if (count % 2 === 0) {
            evenCounter += 1
        }
    }

    return evenCounter;
}

console.log(findNumbers2(nums1))
console.log(findNumbers2(nums2))