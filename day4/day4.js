const fs = require('fs');

const lines = fs.readFileSync('./day4/input.txt', 'utf8').trim().split('\n');

const n = lines.length;
const m = lines[0].length;

const dirs = [
  [0, 1], [0, -1], [1, 0], [-1, 0],
  [1, 1], [1, -1], [-1, 1], [-1, -1]
];
const xDirs = [
  [1, 1], [1, -1], [-1, 1], [-1, -1], [0, 0]
];

function getWordsFromPoint(i, j) {
  const words = [];
  
  dirs.forEach(([di, dj]) => {
    let word = '';
    
    for (let k = 0; k < 4; k++) {
      const ni = i + k * di;
      const nj = j + k * dj;
      
      if (ni >= 0 && ni < n && nj >= 0 && nj < m) {
        word += lines[ni][nj];
      } else {
        break;
      }
    }
    
    if (word.length === 4) {
      words.push(word);
    }
  });

  return words;
}

function getXWordFromPoint(i, j) {
  return xDirs.map(([di, dj]) => lines[i + di][j + dj]).join('');
}

let resPart1 = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    resPart1 += getWordsFromPoint(i, j).filter(word => word === "XMAS").length;
  }
}

let resPart2 = 0;
for (let i = 1; i < n - 1; i++) {
  for (let j = 1; j < m - 1; j++) {
    const xWord = getXWordFromPoint(i, j);
    if (["SMSMA", "MSMSA", "SSMMA", "MMSSA"].includes(xWord)) {
      resPart2 += 1;
    }
  }
}

console.log(resPart1);
console.log(resPart2);
