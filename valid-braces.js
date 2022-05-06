/*
Write a function that takes a string of braces, and determines
if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
A String of braces is considered valid if all braces are matched with the correct brace. Algo from CodeWars 6ky
*/

// Solution - Using an Object
function validBraces(braces) {
    let matches = { '(': ')', '{': '}', '[': ']' };
    let queue = [];

    for (let brace of braces) {
        if (matches[brace]) {
            queue.push(brace);
        } else {
            if (brace !== matches[queue.pop()]) {
                return false;
            }
        }
    }
    return queue.length === 0;
}


// Alternative Solution 1 - Better Complexity 
function validBraces1(braces) {
    let newArray = [];

    for (let brace of braces) {
        if (brace === "(" || brace === "{" || brace === "[") {
            newArray.push(brace);
        } else {
            let last = newArray.pop();
            if (last === '(' && brace === ')') {
                continue
            } else if (last === '{' && brace === '}') {
                continue
            } else if (last === '[' && brace === ']') {
                continue
            } else {
                return false;
            }
        }
    }
    return newArray.length === 0;
}

// Alternative Solution 2 - Using a While loop
function validBraces2(braces) {
    while (braces.indexOf("{}") != -1 || braces.indexOf("()") != -1 || braces.indexOf("[]") != -1) {
        braces = braces.replace("{}", "").replace("()", "").replace("[]", "");
    }
    return braces.length === 0;
}

// Alternative Solution 3 - For loop and conditionals
function validBraces3(braces) {
    let tracer = []
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" || braces[i] === "{" || braces[i] === "[") {
            tracer.push(braces[i])
        } else {
            if (tracer.length === 0) return false
            let lastValue = tracer[tracer.length - 1]
            if ((braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '(')) {
                tracer.pop()
            } else {
                break;
            }
        }
    }
    return tracer.length === 0
}

console.log(validBraces("()")) // true
console.log(validBraces("[]")) // true
console.log(validBraces("{}")) // true
console.log(validBraces("(){}[]")) // true
console.log(validBraces("([{}])")) // true
console.log(validBraces("(}")) // false
console.log(validBraces("[(])")) // false
console.log(validBraces("({})[({})]")) // true
console.log(validBraces("(})")) // false
console.log(validBraces("(({{[[]]}}))")) //true
console.log(validBraces("{}({})[]")) // true
console.log(validBraces(")(}{][")) // false
console.log(validBraces("())({}}{()][][")) // false
console.log(validBraces("(((({{"))  // false
console.log(validBraces("}}]]))}])")) // false