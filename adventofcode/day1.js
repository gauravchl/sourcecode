#!/usr/bin/env node

const fs = require('fs');
const input = fs.readFileSync('./day1.input', {encoding : 'utf8'});

function getResultingFrequency(input) {
  const frequencies = input.trim().split('\n');
  return frequencies.reduce((a, b) => (parseInt(a) + parseInt(b)))
};

console.log('Resulting Frequency:', getResultingFrequency(input));
