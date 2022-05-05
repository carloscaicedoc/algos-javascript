/* PALINDROME  
Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not. -- Algo from LeetCode */

// My Solution:
let isPalindrome = function(x) {
    if (x < 0) return false;
    let str = x.toString();

    for (let i=0; i<str.length/2; i++) {
        if (str[i] != str[str.length - i - 1]){
            return false;
        }
    }
    return true;
}

// Test Cases:

console.log(isPalindrome(42324))
console.log(isPalindrome(232))
console.log(isPalindrome(123321))
console.log(isPalindrome(47984))
console.log(isPalindrome(475674))
console.log(isPalindrome(4794))
console.log(isPalindrome(-44))

// Alternative Solution - One liner
let isPalindrome2 = function(x) {
    return String(x) == String(x).split("").reverse().join("") ? true : false;
}

// Test cases for alternative solution:  
console.log(isPalindrome2(232))
console.log(isPalindrome2(32))