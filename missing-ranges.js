/* MISSING RANGES

You are given an inclusive range [lower, upper] and a sorted unique integer array nums, 
where all elements are in the inclusive range.
A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
Return the smallest sorted list of ranges that cover every missing number exactly. 
That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b
*/

const nums1 = [0, 1, 3, 50, 75];
const lower1 = 0;
const upper1 = 99;
const expected1 = ["2", "4->49", "51->74", "76->99"];

const nums2 = [1, 2, 3, 5, 9, 10, 11, 13, 19];
const lower2 = -1;
const upper2 = 20;
const expected2 = ["-1=>0", "6=>8", "12", "14=>15", "17=>20"];

// Solution - Consecutives
let missingRanges = (nums, lower, upper) => {
    let ranges = [];
    // Edge Case: Empty arrray
    if (nums.length === 0) {
        if (lower === upper) {
            ranges.push(lower.toString());
        } else {
            ranges.push(lower.toString() + '->' + upper.toString());
        }
        return ranges;
    }
    // Edge Case: first element is not equal lower.
    if (nums[0] !== lower) {
        const firstNum = nums[0] - 1;
        if (firstNum === lower) {
            ranges.push(lower.toString());
        } else {
            let firstRangeStr = lower.toString() + '->' + firstNum.toString()
            ranges.push(firstRangeStr);
        }
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] - nums[i] === 1) {
            continue;
        } else if (nums[i + 1] - nums[i] !== 1) {
            const lowRange = nums[i] + 1;
            const highRange = nums[i + 1] - 1;
            if (lowRange === highRange) {
                ranges.push(lowRange.toString())
            } else {
                let rangeStr = lowRange.toString() + '=>' + highRange.toString()
                ranges.push(rangeStr);
                // ranges.push(highRange);
            }
        }
    }
    // Edge Case: last element is not equal upper.
    if (nums[nums.length - 1] !== upper) {
        const lastNum = nums[nums.length - 1] + 1;
        if (lastNum === upper) {
            ranges.push(upper.toString());
        } else {
            let lastRangeStr = lastNum.toString() + '=>' + upper.toString()
            ranges.push(lastRangeStr);
        }
    }
    return ranges;
}

// console.log(missingRanges(nums1, lower1, upper1))
// console.log(missingRanges(nums2, lower2, upper2))

// Alternative Solution: 
function findMissingRanges(nums, lower, upper) {
    let res = [];

    nums = [lower -1, ...nums, upper + 1];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        if (nums[i] === nums[i - 1] + 2) {
            res.push('' + nums[i - 1] + 1);
        } else {
            res.push([nums[i - 1] + 1, nums[i] - 1].join('->'))
        }
    }
    return res;
}

const nums3 = [2, 10, 18, 22];
const lower3 = 1;
const upper3 = 26;
const expected3 = ["1", "3->9", "11->17", "19->21", "23->26"];

console.log(findMissingRanges(nums3, lower3, upper3))