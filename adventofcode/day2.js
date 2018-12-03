#!/usr/bin/env node

const fs = require("fs");
const input = fs.readFileSync("./day2.input", { encoding: "utf8" });

function getChecksum(input) {
  const ids = input.trim().split("\n");
  let appearanceOfTwo = 0;
  let appearanceOfThree = 0;

  ids.forEach(id => {
    const countTable = {};
    id.trim()
      .split("")
      .forEach(char => {
        countTable[char] = countTable[char] ? ++countTable[char] : 1;
      });
    if (Object.values(countTable).indexOf(2) > -1) appearanceOfTwo++;
    if (Object.values(countTable).indexOf(3) > -1) appearanceOfThree++;
  });
  return appearanceOfTwo * appearanceOfThree;
}

function getDiffer(input) {
  const ids = input.trim().split("\n");
  let result = '';

  for (let i = 0; i < ids.length - 1; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      let differCount = 0;
      let diffIndex = -1;
      for (let k = 0; k < ids[i].length; k++) {
        if (ids[i][k] != ids[j][k]) {
          differCount ++;
          diffIndex = k;
        }
        if (differCount > 1) {
          diffIndex = -1;
          break;
        }
      }

      if (differCount === 1) {
        let result = ids[i].split('')
        result.splice(diffIndex, 1);
        return result.join('')
      }
    }
  }
  return result;
}

console.log("Checksum:", getChecksum(input), 'Differ', getDiffer(input));
