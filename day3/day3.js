const fs = require('fs');

const input = fs.readFileSync('./day3/input.txt', 'utf8');

let resPart1 = 0;
const instructions = input.match(/mul\(\d+,\d+\)/g);

if (instructions) {
    instructions.forEach(instruction => {
        const [a, b] = instruction.match(/\d+/g).map(Number);
        resPart1 += a * b;
    });
}

console.log('Part 1:', resPart1);

let resPart2 = 0;
let ignoreInstruction = false;

const allInstructions = input.match(/mul\(\d+,\d+\)|don't\(\)|do\(\)/g);

if (allInstructions) {
    allInstructions.forEach(instruction => {
        if (instruction === "don't()") {
            ignoreInstruction = true;
        } else if (instruction === "do()") {
            ignoreInstruction = false;
        } else if (!ignoreInstruction) {
            const [a, b] = instruction.match(/\d+/g).map(Number);
            resPart2 += a * b;
        }
    });
}
console.log("Part 2 Result:", resPart2);
