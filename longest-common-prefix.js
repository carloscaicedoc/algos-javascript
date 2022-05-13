/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". From LeetCode 14. 
*/

// Example 1: 
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

let longestCommonPrefix = function (strs) {
    if (!strs.length) return "";

    for (let i = 0; i <= strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}

let words = ["California", "Cali", "Calm"]
let words2 = ["Age", "Against", "Agora"]
let words3 = ["Forecast", "Forest", "Forward"]
let words4 = ["flower","flow","flight"]
let words5 = ["Carlos", "Carro", "Caramelo", "Cariño"]

console.log(longestCommonPrefix(words))
console.log(longestCommonPrefix(words2))
console.log(longestCommonPrefix(words3))
console.log(longestCommonPrefix(words4))
console.log(longestCommonPrefix(words5))