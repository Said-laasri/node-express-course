const _ = require("lodash");

const items = [1, [2, [3, [4]]]];

const newItem = _.flattenDeep(items);

console.log(newItem);