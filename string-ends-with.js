// STRING ENDS WITH 

// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

function stringEndsWith(str, ending) {
      if (ending.length == 0) {
        return true;
      }
      return str.substr(-(ending.length)) == ending; 
    }

console.log(stringEndsWith("pato", "to"))
console.log(stringEndsWith("samurai", "ai"))
console.log(stringEndsWith("primavera", "overa"))
console.log(stringEndsWith("sensei", "ai"))

// Alternative Solution 

function stringEndsWith2(str, ending) {
  return str.endsWith(ending);
}

console.log(stringEndsWith2("pato", "to"))
console.log(stringEndsWith2("sensei", "ai"))

