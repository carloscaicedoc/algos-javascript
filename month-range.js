// Interview question from a company that has Google, Dropbox, and Zillow as clients.
/* 
   MONTH RANGE
 * Gets all the months for the given inclusive range.
 * @param {number} start Start month.
 * @param {number} end End month.
 * @returns {number[]} Start to end month range inclusive.
*/

const start1 = 5;
const end1 = 5;
const expected1 = [5];

const start2 = 5;
const end2 = 6;
const expected2 = [5, 6];

const start3 = 10;
const end3 = 3;
const expected3 = [10, 11, 12, 1, 2, 3];

const start5 = 12;
const end5 = 2;
const expected5 = [12, 1, 2];

const start6 = -1;
const end6 = 4;
const expected6 = [];

// Solution: 
let monthRange = function (start, end) {
    let range = [];

    if (start < 1 || end < 1 || start > 12 || end > 12) return [];

    if (start === end) {
        range.push;
        return [start];
        // return start;
    }

    let m = start;
    if (start < end && end <= 12) {
        while (m <= end) {
            range.push(m);
            m++;
        }
    } else if (start > end) {
        while (m <= 12) {
            range.push(m);
            m++
        }
        let month = 1;
        while (month <= end) {
            range.push(month);
            month++;
        }
    }
    return range;
}

// Test Cases:
console.log(monthRange2(start1, end1));
console.log(monthRange2(start2, end2));
console.log(monthRange2(start3, end3));
console.log(monthRange2(start5, end5));
console.log(monthRange2(start6, end6));

// Alternative Solution: 
function monthRange2(start, end) {
    if (!(start > 0 && end > 0 && start <= 12 && end <= 12)) {
        return [];
    }

    if (start === end) {
        return [start];
    }

    const months = [];
    let monthNum = start;

    while (monthNum !== end) {
        months.push(monthNum);

        if (monthNum === 12) {
            monthNum = 0;
        }

        monthNum++;
    }
    months.push(end);
    return months; 
}

// Alternative Solution 3 - Ternary Operator
function monthRange3(start, end) {
    if (!(start > 0 && end > 0 && start <= 12 && end <= 12)) {
        return [];
    }

    if (start === end) {
        return [start];
    }

    const months = [];
    const count = start < end ? end - start : 12 - start + end;

    for (let n = start, i = 0; i < count + 1; n++, i++) {
        months.push(n === 12 ? 12 : n % 12)
    }
    // Similar syntax for the same loop. 
    // let n = start
    // for (i = 0; i < count + 1; i++) {
    //     months.push(n === 12 ? 12 : n % 12);
    //     n++;
    // }

    return months;
}