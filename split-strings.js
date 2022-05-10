/* 
SPLIT STRINGS - ALGO
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing 
second character of the final pair with an underscore ('_'). From CodeWars 6 kyu */

function solution(str) {
    let newArray = str.split('');
    let finalArray = [];

    for (let i = 0; i<newArray.length; i+=2) {
        if (newArray[i + 1] != null) {
            finalArray.push(newArray[i] + newArray[i + 1])
        } else {
            finalArray.push(newArray[i] + "_")
        }
    }
    return finalArray;
}

// Alternative Solution - While Loop:

function solution2(str) {
    let result = [];
    let i = 0;

    if (str.length % 2 !== 0) {
        str = str + '_';
    }
    while (i < str.length) {
        result.push(str[i] + str[i+1]);
        i += 2
    }
    return result;
}

// Test cases: 
console.log(solution("abcd"));
console.log(solution("xyz"));
console.log(solution("Coco"));
console.log(solution("Clementine"));
console.log(solution("Celeste"));
console.log(solution("Jupiter"));
console.log(solution("Thomas"));
console.log(solution("Matilde"));