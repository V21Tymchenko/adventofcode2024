const fs = require('fs');

const input = fs.readFileSync('./day2/input.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(/\s+/).map(Number));

const isSafeArrow = array => 
    array.every((_, i, arr) => {
        if (i === 0) return true; 
        const diff = Math.abs(arr[i] - arr[i - 1]);
        if (diff === 0 || diff > 3) return false; 
        if (i > 1 && ((arr[i] > arr[i - 1] && arr[i - 1] < arr[i - 2]) || 
                      (arr[i] < arr[i - 1] && arr[i - 1] > arr[i - 2]))) {
            return false; 
        }
        return true;
    });

const countSafeArrows = reports => 
    reports.reduce((count, report) => count + (isSafeArrow(report) ? 1 : 0), 0);

const response = countSafeArrows(input);
console.log("Safe arrows:", response);

const canBeMadeSafe = array => {
    for (let i = 0; i < array.length; i++) {
        const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
        if (isSafeArrow(newArray)) {
            return true;
        }
    }
    return false;
};

const countSafeArrowsWithDampener = reports =>
    reports.reduce(
        (count, report) => count + (isSafeArrow(report) || canBeMadeSafe(report) ? 1 : 0),
        0
    );

const responseSecond = countSafeArrowsWithDampener(input);
console.log("Safe arrows with Problem Dampener:", responseSecond);
