const consoleLog = (req, res, next) => {
  console.log("This is a middleware consoleLog");
  next();
};

module.exports = consoleLog;

