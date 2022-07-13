/* 
  Given two arrays, interleave them into one new array.
  The arrays may be different lengths. The extra items should be added to the
  back of the new array.
  * Interleaving means alternating the items starting from the first array.
*/

const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

// Solution - Define larger array & for loop: 
function interleaveArrays(arr1, arr2) {
    const interleavedItems = [];
    let largeArr = arr1;

    if (arr2.length > arr1.length) {
        largeArr = arr2;
    }

    for (let i = 0; i < largeArr.length; i++) {
        if (i < arr1.length && i < arr2.length) {
            interleavedItems.push(arr1[i], arr2[i])
        } else {
            interleavedItems.push(largeArr[i])
        }
    }

    return interleavedItems;
}

console.log(interleaveArrays(arrA1, arrB1))
console.log(interleaveArrays(arrA2, arrB2))
console.log(interleaveArrays(arrA3, arrB3))
console.log(interleaveArrays(arrA4, arrB4))

// Alternative. Solution 2 - While loop:
let interleaveArrays2 = function (arr1, arr2) {
    let interleavedArr = [];
    let largeArr = arr1.length > arr2.length ? arr1 : arr2;

    let i = 0;
    while (i < largeArr.length) {
        if (i < arr1.length && i < arr2.length) {
            interleavedArr.push(arr1[i], arr2[i])
        } else {
            interleavedArr.push(largeArr[i])
        }
        i++;
    }

    return interleavedArr;
}

// Alternative. Solution 3 - for loop & var 
function interleaveArrays3(arr1, arr2) {
    const interleavedItems = [];
    let largeArr = arr1;

    if (arr2.length > arr1.length) {
        largeArr = arr2;
    }

    for (var i = 0; i < arr1.length && i < arr2.length; i++) {
        interleavedItems.push(arr1[i], arr2[i])
    }

    for (let j = i; j < largeArr.length; j++) {
        interleavedItems.push(largeArr[j])
    }

    return interleavedItems;
}

// Alternative. Solution 4: var .slice & .concat 
function interleaveArrays4(arr1, arr2) {
    const interleavedItems = [];

    let largeArr = arr1.length > arr2.length ? arr1 : arr2;

    for (var i = 0; i < arr1.length && i < arr2.length; i++) {
        interleavedItems.push(arr1[i], arr2[i])
    }

    return interleavedItems.concat(largeArr.slice(i));
}