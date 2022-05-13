/* ROMAN NUMERALS DECODER
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
You don't need to validate the form of the Roman numeral. Algo from CodeWars 6 kyu */

function solution(roman) {

    const romanMap = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }

    let newArray = [];

    for (let i=0; i<roman.length; i++) {
        if (romanMap[roman[i]] < romanMap[roman[i + 1]]){
            newArray.push(romanMap[roman[i + 1]] - romanMap[roman[i]])
            i++;
            continue;
        } else {
            newArray.push(romanMap[roman[i]])
        }
    }
    let digit = 0
    for (let i=0; i<newArray.length; i++) {
        digit += newArray[i];
    }
    return digit;
}
// Test Cases: 
console.log(solution("MMMCLVIII"))
console.log(solution("XXX"))
console.log(solution("XXIII"))
console.log(solution("IX"))
console.log(solution("XI"))
console.log(solution("XIV"))

// ~~~~~~~~~~~~~~~~~~~~~~
// Alternative Solution 2
const solution2 = (roman) => {
    const romanNumerals = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    
    let numericValue = 0;
    
    for (let i = 0; i < roman.length; i++) {
        if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]){
            numericValue += romanNumerals[roman[i + 1]] - romanNumerals[roman[i]];
            i++
        } else {
            numericValue += romanNumerals[roman[i]]
        }
    }
    return numericValue;
}

console.log("Test Cases Solution 2:")
console.log(solution2("MMMCLVIII"))
console.log(solution2("XXX"))
console.log(solution2("XXIII"))
console.log(solution2("IX"))
console.log(solution2("XI"))
console.log(solution2("XIV"))

// ~~~~~~~~~~~~~~~~~~~~~~
// Alternative Solution 3
function solution3(roman){
    let map = {M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1};
    let numbers = roman.split('');
    let sum = 0;
    
    for (let i=0; i<numbers.length; i++){
        if (map[roman[i]] < map[roman[i + 1]]) {
            sum += map[roman[i + 1]] - map[roman[i]]
            i++;
        } else {
            sum += map[roman[i]] 
        }
    }
    return sum;
}
console.log("Test Cases Solution 3:")
console.log(solution3("MMMCLVIII"))
console.log(solution3("XXX"))
console.log(solution3("XXIII"))
console.log(solution3("IX"))
console.log(solution3("XI"))
console.log(solution3("XIV"))