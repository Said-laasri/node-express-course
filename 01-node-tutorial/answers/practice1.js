const sentence = require("./practice2.js");
const os = require("os");
const fs = require("fs");

//writeFileSync

fs.writeFileSync("./content/practice.txt", sentence, { flag: "a" });
fs.writeFileSync("./content/practice.txt", os.userInfo().username, { flag: "a" });