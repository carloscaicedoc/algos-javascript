/* MINIMUN TO THE FRONT
  Given an array, move the minimum value to the front in-place
  return the array after done.
  No built in methods.
*/

const nums1 = [6, 4, 5, 1, 3, 2];
const expected1 = [1, 6, 4, 5, 3, 2];

const nums2 = [1, 5, 2, 9];
const expected2 = [1, 5, 2, 9];

// The min occurs twice.
const nums3 = [5, 1, 0, 2, 3, 0];
const expected3 = [0, 5, 1, 2, 3, 0];

const nums4 = [7, 9, 4, 6, 2];
const nums5 = [11, 44, 66, 23, 57, 8];

// Solution: 

const minToFront = (nums) => {
    if (nums.length === 0) {
        return nums;
    }
    let idxOfMin = 0
    let min = nums[idxOfMin];

    for (let i = 1; i < nums.length; i++) {
        // min = Math.min(min, nums[i]);
        if (nums[i] < min) {
            min = nums[i];
            idxOfMin = i;
        }
    }
    // starting from where the min is, shift to the right to overwrite the min
    // which will leave an empty space at the beginning
    //  i>= 1 so i - 1 doesn't go below 0
    for (let i = idxOfMin; i >= 1; i--) {
        nums[i] = nums[i - 1];
        // console.log(nums);
    }
    nums[0] = min;

    return nums;
}

console.log(minToFront(nums1))
console.log(minToFront(nums2))
console.log(minToFront(nums3))

// Alternative Solution: 
function moveMinFrontBuiltIn(nums = []) {

    const minVal = Math.min(...nums);
    const idxOfMin = nums.indexOf(minVal);

    nums.splice(idxOfMin, 1);
    nums.unshift(minVal);

    return nums;
}

console.log(moveMinFrontBuiltIn(nums1))