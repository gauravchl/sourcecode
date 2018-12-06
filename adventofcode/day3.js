#!/usr/bin/env node

const fs = require("fs");
const input = fs.readFileSync("./day3.input", { encoding: "utf8" });

const WIDTH = 1000;
const HEIGHT = 1000;

function getInputes() {
  const items = input.trim().split("\n");
  // Prepare the input
  return items.map(item => {
    const partsA = item.trim().split(" ");
    const partsB = partsA[2].split(",");
    const partsC = partsA[3].split("x");
    return [
      parseInt(partsB[0]),
      parseInt(partsB[1].split(":")[0]),
      parseInt(partsC[0]),
      parseInt(partsC[1])
    ];
  });
}

function getOverlapCount() {
  const items = getInputes();

  // Initialize the BIG array
  const arr = new Array();
  for (let i = 0; i < HEIGHT; i++) {
    arr.push(new Array(WIDTH));
  }

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const jMin = item[0];
    const jMax = item[0] + item[2];
    const kMin = item[1];
    const kMax = item[1] + item[3];

    for (j = jMin; j < jMax; j++) {
      for (k = kMin; k < kMax; k++) {
        if (!arr[j][k]) {
          arr[j][k] = 1;
        } else {
          arr[j][k] = arr[j][k] + 1;
        }
      }
    }
  }

  let result = 0;
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      if (arr[i][j] > 1) {
        result = result + 1;
      }
    }
  }
  return result;
}

function isOverlapping(itemA, itemB) {
  const aXStart = itemA[0];
  const aXEnd = itemA[0] + itemA[2] - 1;
  const bXStart = itemB[0];
  const bXEnd = itemB[0] + itemB[2] - 1;

  const aYStart = itemA[1];
  const aYEnd = itemA[1] + itemA[3] - 1;
  const bYStart = itemB[1];
  const bYEnd = itemB[1] + itemB[3] - 1;

  const isOverlappingHorizontally =
    (bXStart >= aXStart && bXStart <= aXEnd) ||
    (bXEnd >= aXStart && bXEnd <= aXEnd) ||
    (bXStart <= aXStart && bXEnd >= aXEnd);

  const isOverlappingVertically =
    (bYStart >= aYStart && bYStart <= aYEnd) ||
    (bYEnd >= aYStart && bYEnd <= aYEnd) ||
    (bYStart <= aYStart && bYEnd >= aYEnd);

  return isOverlappingHorizontally && isOverlappingVertically
}

function getNonOverlapingItem() {
  const items = getInputes();

  for (i = 0; i < items.length - 1; i++) {
    for (j = i + 1; j < items.length; j++) {
      if(isOverlapping(items[i], items[j])) {
        items[i][4] = true;
        items[j][4] = true;
      }
    }
  }
  return items.findIndex(item => !item[4]) + 1
}

console.log(
  "Overlap Count",
  getOverlapCount(),
  "Non Overlap ID",
  getNonOverlapingItem()
);
