/* WEIRD STRING CASE
Write a function toWeirdCase that accepts a string, and returns the same string with 
all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. 
The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper 
cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). 
Spaces will only be present if there are multiple words. Words will be separated by a single space(' '). From CodeWars
*/

function toWeirdCase(string) {
    let weird = '';
    let counter = 0;

    for (let i = 0; i < string.length; i++){
        if (string[i] == ' ') {
            weird += ' ';
            counter = 0
        } else if (counter % 2 === 0) {
            weird += string[i].toUpperCase();
            counter++;
        } else if (counter % 2 !== 0) {
            weird += string[i].toLowerCase();
            counter++;
        }
    }
    return weird;
}

// Test Cases: 

console.log(toWeirdCase("alice in the wonderland"));
console.log(toWeirdCase("Thursday"));
console.log(toWeirdCase("Summer Season"));
console.log(toWeirdCase("CHANGE"));
console.log(toWeirdCase("silence please"));
console.log(toWeirdCase("bReAkFaSt tImE"));