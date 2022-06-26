/* 
  DEDUPE SORTED ARRAY:
  Given a SORTED array of integers, dedupe the array 
  Because array elements are already in order, all duplicate values will be grouped together.
  Ok to use a new array
  Bonus: do it in O(n) time (no nested loops, new array ok)
  Bonus: Do it in-place (no new array)
  Bonus: Do it in-place in O(n) time and no new array
  Bonus: Keep it O(n) time even if it is not sorted
*/

const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [2, 2, 3, 3, 4, 4, 4, 5, 5];
const expected2 = [2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [4, 4, 4, 4, 4, 4];
const expected4 = [1];

const nums5 = [1, 1, 3, 3, 3, 3, 5, 7, 7, 9, 9, 9];
const expected5 = [1];

// Solution: Frequency Table:
function dedupeSorted(nums = []) {
    let deduped = [];
    let mapFreq = {};

    for (const num of nums) {
        // const currNum = nums[i];
        if (mapFreq[num] !== undefined) {
            mapFreq[num]++;
        } else {
            mapFreq[num] = 1;
            deduped.push(num)
        }

    }

    return deduped;
}

console.log(dedupeSorted(nums1))
console.log(dedupeSorted(nums2))
console.log(dedupeSorted(nums3))
console.log(dedupeSorted(nums4))
console.log(dedupeSorted(nums5))

// Alternative Solution: 
function dedupeSorted2(sortedNums = []) {
    if (sortedNums.length <= 1) {
        return sortedNums;
    }

    let dedupedArr = [];

    for (let i = 0; i < sortedNums.length; i++) {
        const currNum = sortedNums[i];
        const lastNumDeduped = dedupedArr[dedupedArr.length - 1];

        if (currNum !== lastNumDeduped) {
            dedupedArr.push(currNum);
        }
    }

    return dedupedArr;
}

// console.log(dedupeSorted2(nums2));

// Alternative Solution: 
function dedupeSortedInPlace(sortedNums) {
    const deduped = [];

    for (const n of sortedNums) {
        if (deduped[deduped.length - 1] !== n) {
            deduped.push(n);
        }
    }

    for (let i = 0; i < deduped.length - 1; i++) {
        sortedNums[i] = deduped[i];
    }

    sortedNums.length = deduped.length;
    return sortedNums;
}

// console.log(dedupeSortedInPlace(nums2));

// Solution Array Unordered:
function dedupeUnordered(nums) {
    if (nums.length == 0 || nums.length == 1) {
        return nums;
    }

    const seen = {};
    const dedupedArr = [];

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];

        if (seen.hasOwnProperty(item) === false) {
            seen[item] = true;
            dedupedArr.push(item);
        }
    }
    return dedupedArr;
}

