'use strict';

const ages = persons => {
  const data = {};
  for (const key in persons) {
    let person = persons[key];
    data[key] = person.died - person.born
  }
  return data;
};

module.exports = { ages };
