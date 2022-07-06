/*
SQUARES OF A SORTED ARRAY
Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.
*/

const sorted1 = [-4,-1,0,3,10];
const expected1 = [0,1,9,16,100];

const sorted2 = [-7,-3,2,3,11];
const expected2 = [4,9,9,49,121];

// Solution: Two pointers O(n)
const sortedSquares = (nums) => {
    let n = nums.length;
    let squares = new Array(n)
    // Left & Right pointers:
    let left = 0;
    let right = n - 1;

    for (let i = n - 1; i >= 0; i--) {
        let sq;
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            sq = nums[right];
            right--;
        } else {
            sq = nums[left];
            left++;
        }
        squares[i] = sq * sq;
    }

    return squares;
}

// Time Complexity: O(N)
// Space Complexity: O(N)

// console.log(sortedSquares(sorted2))
// console.log(sortedSquares(sorted1))

// Alternative Solution 2:
const squaresSorted = (sorted) => {
    let squares = [];

    for (const num of sorted) {
        squares.push(Math.pow(num, 2));
    }

    squares.sort((a, b) => a - b);
    return squares;
}

// Time Complexity: O(NlogN)
// Space Complexity: O(N) or O(NlogN)

console.log(squaresSorted(sorted1))
console.log(squaresSorted(sorted2))