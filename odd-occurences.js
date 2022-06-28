// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected1 = 1;

const nums2 = [5, 4, 5];
const expected2 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected3 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected4 = 1;

const nums5 = [3, 4, 6, 8, 9, 9, 8, 6, 4, 3, 5];


// Solution 

const oddOccurencesInArray = (nums) => {
    let freqMap = {};
    // Frequency Table:
    for (const num of nums) {
        if (freqMap[num]) {
            freqMap[num]++;
        } else {
            freqMap[num] = 1;
        }
    }

    for (const key in freqMap) {
        if (freqMap[key] === 1 || freqMap[key] % 2 !== 0) {
            return +key;
        }
    }
    return;
} 

console.log(oddOccurencesInArray(nums1))
console.log(oddOccurencesInArray(nums2))
console.log(oddOccurencesInArray(nums3))
console.log(oddOccurencesInArray(nums4))
console.log(oddOccurencesInArray(nums5))

// Alternative Solution 2
function oddOccurrencesInArray2(nums = []) {
    const freqTable = {};
  
    for (const n of nums) {
      if (freqTable.hasOwnProperty(n)) {
        freqTable[n]++;
      } else {
        freqTable[n] = 1;
      }
    }
  
    for (const key in freqTable) {
      if (freqTable[key] % 2 !== 0) {
        return +key; // + converts the string key back to int.
      }
    }
  
    // The spec guaranteed there will be a solution so no other return is needed.
  }
  
  // Alternative Solution 3
  function oddOccurrencesInArray3(nums = []) {
    // Map lets us store ints as keys so we don't have to convert back to int.
    const freqMap = new Map();
  
    for (const n of nums) {
      if (freqMap.has(n)) {
        freqMap.set(n, freqMap.get(n) + 1);
      } else {
        freqMap.set(n, 1);
      }
    }
  
    //         [key, val]
    for (const [n, count] of freqMap) {
      if (count % 2 !== 0) {
        return n;
      }
    }
  }