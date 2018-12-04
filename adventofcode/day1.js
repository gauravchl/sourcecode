#!/usr/bin/env node

const fs = require('fs');
const input = fs.readFileSync('./day1.input', {encoding : 'utf8'});

function getResultingFrequency(input) {
  const frequencies = input.trim().split('\n');
  return frequencies.reduce((a, b) => (parseInt(a) + parseInt(b)))
};

function getFirstRepeatingFrequency(input) {
  const frequencies = input.trim().split('\n');
  const frequencyRecord = new Set([0]);
  let currentFrequency = 0;
  let index = 0;

  while(1) {
    currentFrequency = currentFrequency + parseInt(frequencies[index]);
    if (frequencyRecord.has(currentFrequency)) {
      break;
    }
    frequencyRecord.add(currentFrequency);
    index = index === frequencies.length - 1 ? 0 : index + 1;
  }
  return currentFrequency;
}

console.log('Resulting Frequency:', getResultingFrequency(input), 'First repeating frequency', getFirstRepeatingFrequency(input));
