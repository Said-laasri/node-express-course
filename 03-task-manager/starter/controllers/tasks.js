const Task = require("../models/Task");

const getAllTasks = (req, res) => {
  res.send("all tasks");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);

  res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task from filter with id 233");
};

const deleteTask = (req, res) => {
  res.send("delete task from file");
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
