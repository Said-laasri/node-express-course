const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors/index");

const login = async (req, res) => {
  const { username, password } = req.body;

  //mongoDB
  //joi
  // check in the controllers

  if (!username || !password) {
    throw new BadRequestError("Please provide User and password");
  }

  //just for demo, normally provided by the mongodb
  const id = new Date().getDate();

  //try to keep the payload as small as possible In Production use long and complex one
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
