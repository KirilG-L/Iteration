'use strict';

const max = matrix => {
  let result = 0;
  for (const row of matrix) {
    for (const item of row) {
      if (item > result) result = item;
    }
  }
  return result;
};

module.exports = { max };
