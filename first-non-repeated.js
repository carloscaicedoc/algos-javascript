/* FIRST NON REPEATED - ALGORITHM
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else
  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 5, 5, 7, 9, 6];
const expected1 = 7;

const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 4, 5];
const expected3 = 4;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

// Solution - Frequency Table:
const firstNonRepeated = (nums) => {
    let mapFreq = {};
    
    // Edge Cases: 
    if (nums.length === 0) {
        return null;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2 && nums[0] !== nums[1]) {
        return nums[0];
    }
    if (nums.length === 2 && nums[0] === nums[1]) {
        return null;
    }

    for (let i = 0; i < nums.length; i++) {
        if (mapFreq[nums[i]]) {
            mapFreq[nums[i]]++;
        } else {
            mapFreq[nums[i]] = 1;
        }
        if (i === nums.length - 1) {
            for (const key in mapFreq) {
                if (mapFreq[key] === 1) {
                    return key;
                }
            }
        }
    }

    return null;
}

console.log(firstNonRepeated(nums1))
console.log(firstNonRepeated(nums2))
console.log(firstNonRepeated(nums3))
console.log(firstNonRepeated(nums4))

// Alternative Solution: 
function firstNonRepeated2(nums = []) {
    const freq = {};

    // Create Frequency Table:
    for (const num of nums) {
        if (freq.hasOwnProperty(num)) {
            freq[num]++;
        } else {
            freq[num] = 1;
        }
    }

    // Loop to check first unique element. 
    for (const num of nums) {
        if (freq[num] === 1) {
            return num;
        }
    }

    return null;
}    

console.log(firstNonRepeated2(nums1))