#!/usr/bin/env node

const fs = require("fs");
const input = fs.readFileSync("./day4.input", { encoding: "utf8" });

const Actions = {
  BEGINS_SHIFT: "begins shift",
  FALLS_ASLEEP: "falls asleep",
  WAKES_UP: "wakes up"
};

// It's a complicated solution for simple problem,
// I realized the problem can be solved simply after
// createing this sophisticated solution
// No need to use javascript date object.
function prepareInputes() {
  let records = input.trim().split("\n");
  records = records.map(record => {
    const year = record.substr(1, 4);
    const month = record.substr(6, 2);
    const day = record.substr(9, 2);
    const hours = record.substr(12, 2);
    const minutes = record.substr(15, 2);

    const date = new Date(year, month, day, hours, minutes);

    let action;
    if (record.indexOf(Actions.BEGINS_SHIFT) > -1) {
      action = Actions.BEGINS_SHIFT;
    } else if (record.indexOf(Actions.FALLS_ASLEEP) > -1) {
      action = Actions.FALLS_ASLEEP;
    } else if (record.indexOf(Actions.WAKES_UP) > -1) {
      action = Actions.WAKES_UP;
    }

    let guardId;
    if (action === Actions.BEGINS_SHIFT) {
      guardId = record.substring(
        record.indexOf("#") + 1,
        record.indexOf(Actions.BEGINS_SHIFT) - 1
      );
    }
    return { date, action, guardId, minutes };
  });
  records.sort((a, b) => a.date - b.date);
  let guardId;
  records = records.map(r => {
    if (r.guardId) {
      guardId = r.guardId;
    }
    return { ...r, guardId };
  });

  return records;
}

function getMostAsslepGuard() {
  const records = prepareInputes();
  const guards = [];

  let sleepAt;
  for (let i = 0; i < records.length; i++) {
    if (records[i].action === Actions.FALLS_ASLEEP) {
      sleepAt = records[i].date;
    }
    if (records[i].action === Actions.WAKES_UP) {
      const minutesAsleep = (records[i].date - sleepAt) / (1000 * 60);
      const guardIndex = guards.findIndex(g => g.id === records[i].guardId);
      if (guardIndex > -1) {
        guards[guardIndex].totalAsleep += minutesAsleep;
      } else {
        guards.push({ id: records[i].guardId, totalAsleep: minutesAsleep });
      }
    }
  }

  guards.sort((a, b) => b.totalAsleep - a.totalAsleep);

  const mostAsleepGuardId = guards[0].id;
  const mostAsleepGuardRecord = records.filter(
    r => r.guardId === mostAsleepGuardId
  );

  const minutesCount = [];

  for (let i = 0; i < mostAsleepGuardRecord.length; i++) {
    const m = mostAsleepGuardRecord[i].minutes;

    if (mostAsleepGuardRecord[i].action === Actions.FALLS_ASLEEP) {
      sleepAt = parseInt(mostAsleepGuardRecord[i].minutes);
    }

    if (mostAsleepGuardRecord[i].action === Actions.WAKES_UP) {
      const wakesUpAt = parseInt(mostAsleepGuardRecord[i].minutes);
      for (let j = sleepAt; j < wakesUpAt; j++) {
        const index = minutesCount.findIndex(item => item.minute === j);
        if (index > -1) {
          minutesCount[index].value += 1;
        } else {
          minutesCount.push({ minute: j, value: 1 });
        }
      }
    }
  }

  minutesCount.sort((a, b) => b.value - a.value);
  const mostSleepMinute = parseInt(minutesCount[0].minute);
  console.log(mostAsleepGuardId, mostSleepMinute);
  return mostAsleepGuardId * mostSleepMinute;
}

console.log(getMostAsslepGuard());
