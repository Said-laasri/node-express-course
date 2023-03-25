//Common JS modules ( by default in node )

const names = require("./04-names");
const sayHi = require("./05-utils");
const data = require("./06-alternative-flavor");

require("./07-mind-grenade");

console.log(data);

sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
