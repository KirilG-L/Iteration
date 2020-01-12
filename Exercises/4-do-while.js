'use strict';

const sum = (...args) => {
  let i = 0;
  let res = 0;
  do {
    if (args[i]) {
      res += args[i];
    }
    i++;
  } while (i < args.length);
    return res;
};

module.exports = { sum };
