/* 
SEPARATOR STRING
*/ 

const arr1 = [1, 2, 3, 4, 5];
const separator1 = " => ";
const expected1 = " 1, 2, 3, 4, 5";

// Solution 

function separator(arr, separator) {
    let newStr = "";

    for (let i = 0; i < arr.length; i++) {
        // if (newStr.length !== 0) {
        if (newStr) {
            newStr += separator;
        } 
        newStr += arr[i];  
    }

    return newStr;
}

// Test Cases:

console.log(separator(arr1, separator1))

function separator2(arr, separator) {
    let newStr = "";
    
    for (let i = 0; i < arr.length; i++) {
        newStr += arr[i];  
        if (i !== arr.length - 1) {
            newStr += separator;
        } 
    }
    
    return newStr;
}

console.log(separator2(arr1, separator1));