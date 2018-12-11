var arr = Array(300)
  .fill(0)
  .map(_ => Array(300).fill(0));

function getPowerLevel(x, y, sn) {
  const n = (x * y + 10 * y + sn) * (x + 10);
  return getHundredsDigit(n) - 5;
}

function getHundredsDigit(number) {
  const s = String(number);
  return parseInt(s[s.length - 3]) || 0;
}

function fillArray(sn) {
  for (let i = 1; i <= 300; i++) {
    for (let j = 1; j <= 300; j++) {
      arr[i - 1][j - 1] = getPowerLevel(i, j, sn);
    }
  }
}

function getXY(size) {
  const record = [];
  const runUpto = 300 - size + 1;
  console.log(size, runUpto);
  for (let i = 0; i < runUpto; i++) {
    for (let j = 0; j < runUpto; j++) {
      let power = 0;

      for (let m = i; m < i + size; m++) {
        for (let n = j; n < j + size; n++) {
          power = power + arr[m][n];
        }
      }
      record.push({ x: i + 1, y: j + 1, power });
    }
  }

  record.sort((a, b) => b.power - a.power);
  return record[0];
}

function getXYS() {
  const record = [];
  for (let i = 1; i <= 300; i++) {
    const r = getXY(i);
    record.push({ ...r, size: i });
  }
  record.sort((a, b) => b.power - a.power);
  return record[0];
}

fillArray(1955);

// Part1 answer
console.log(getXY(3));

// Part2 answer
console.log(getXYS());
