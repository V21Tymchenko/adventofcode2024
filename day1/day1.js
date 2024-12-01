const fs = require('fs');

const input = fs.readFileSync('./day1/input.txt', 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(/\s+/).map(Number));


const left = input.map(pair => pair[0]);
const right = input.map(pair => pair[1]);

const part1 = left
    .slice()
    .sort((a, b) => a - b)
    .reduce((sum, a, index) => sum + Math.abs(a - right.slice().sort((a, b) => a - b)[index]), 0);

const rightCounts = right.reduce((counter, num) => ({
    ...counter,
    [num]: (counter[num] || 0) + 1
}), {});

const part2 = left.reduce((sum, a) => sum + a * (rightCounts[a] || 0), 0);

console.log('Part 1:', part1);
console.log('Part 2:', part2);