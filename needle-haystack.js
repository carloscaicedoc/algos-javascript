/*
   IMPLEMENT strStr() - Needle . Haystack
Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
or -1 if needle is not part of haystack.

Clarification:
What should we return when needle is an empty string? This is a great question to ask during an interview.
For the purpose of this problem, we will return 0 when needle is an empty string. 
This is consistent to C's strstr() and Java's indexOf().
*/

const haystack1 = "hello";
const needle1 = "ll";
const expected1 = 2;

const haystack2 = "Boston";
const needle2 = "ton";
const expected2 = 3;

// Solution - .substring || .slice
let strStr = function(haystack, needle) {

    if (needle.length === 0 || needle === haystack) {
        return 0;
    }

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (needle === haystack.substring(i, i + needle.length)) {
            return i;
        }
    }

    return -1;
}

console.log(strStr(haystack1, needle1))
console.log(strStr(haystack2, needle2))

// Alternative. Solution 2 - Similar approach different syntax:
let strStr2 = function(haystack, needle) {
    if (!needle.length) return 0;

    for (let i in haystack) {
        if (haystack[i] === needle[0] && haystack.substring(i, Number(i) + needle.length) === needle) {
            return i;
        }
    }
    return -1;
}