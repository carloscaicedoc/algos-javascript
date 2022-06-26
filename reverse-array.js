/* 
  REVERSE ARRAY 
  Given an array, reverse it's items in place
  return the array after reversing it
  Do it in place without using any built in methods
*/

const arr1 = [1, 2, 3, 4, 5, 6, 7];
const expected1 = [3, 2, 1];

const arr2 = ["a", "b", "c", "d", "e"];
const expected2 = ["e", "d", "c", "b", "a"];

const arr3 = ["a"];
const expected3 = ["a"];

const arr4 = [];
const expected4 = [];

// Solution: 
let reverseArray = function (arr) {
    let half = Math.floor(arr.length / 2)
    let end = arr.length - 1

    for (let i = 0; i < half - 1; i++) {
        // Swap: 
        [arr[i], arr[end - i]] = [arr[end - i], arr[i]];
    }
    return arr;
}

console.log(reverseArray(arr1))
console.log(reverseArray(arr2))

// Solution 2; 
function reverseArr(items = []) {
    // Without Math.floor the middle item would be swapped with itself. Wouldn't
    // cause a problem but is unnecessary.
    for (let leftIdx = 0; leftIdx < Math.floor(items.length / 2); leftIdx++) {
        const rightIdx = items.length - 1 - leftIdx;
        const temp = items[leftIdx];
        items[leftIdx] = items[rightIdx];
        items[rightIdx] = temp;
    }
    return items;
}

console.log(reverseArr(arr1))
console.log(reverseArr(arr2))

// Solution 3:
// destructure array syntax, similar to py syntax for swapping
// idx vars to make the swap using destructure syntax more obvious
function revArr(items = []) {
    for (let leftIdx = 0; leftIdx < Math.floor(items.length / 2); leftIdx++) {
        const rightIdx = items.length - 1 - leftIdx;
        [items[leftIdx], items[rightIdx]] = [items[rightIdx], items[leftIdx]];
    }
    return items;
}