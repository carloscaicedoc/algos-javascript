/* Nth To Last : 
Given an array and an int which represents the position starting from the back,
return the nth-to-last element.
JS has introduced the .at method for this purpose, but solve this algo w/o it.
*/

// Last element:
const arr1 = ["a", "b", "c", "d"];
const idx1 = 1;
const expected1 = "d";

// Second to last element:
const arr2 = ["a", "b", "c", "d"];
const idx2 = 2;
const expected2 = "c";

const arr3 = ["a", "b", "c", "d"];
const idx3 = 0;
const expected3 = null;

const arr4 = ["a", "b", "c", "d"];
const idx4 = -1;
const expected4 = null;

const arr5 = [];
const idx5 = 2;
const expected5 = null;


function nthLast(items, nthToLast) {

    if (nthToLast < 1 || items.length === 0) {
        return null
    }

    let idx = items.length - nthToLast;

    return items[idx];
}

console.log(nthLast(arr1, idx1))
console.log(nthLast(arr2, idx2))
console.log(nthLast(arr3, idx3))
console.log(nthLast(arr4, idx4))
console.log(nthLast(arr5, idx5))

// Alternative Solution: Edge cases: 
function nthLast2(items = [], nthToLast = 1) {
    let idx = items.length - nthToLast;

    if (idx >= 0 && idx < items.length) {
        return items[idx];
    } else {
        return null;
    }
}