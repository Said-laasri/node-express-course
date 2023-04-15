const notFount = (req, res) => {
  res.status(404).send("Route not found!");
};

module.exports = notFount;
