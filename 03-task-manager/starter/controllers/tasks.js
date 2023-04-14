const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    await task.save();
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getTask = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id });
    if (!task) {
      return res.status(404).json({ error: "No task found!" });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!updatedTask) {
      return res.status(404).json({ error: "No task found!" });
    }
    res.status(200).json({ task: updatedTask });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findOneAndDelete({ _id: req.params.id });
    if (!deletedTask) {
      return res.status(404).json({ error: "No task found!" });
    }
    res.status(200).json({ task: deletedTask });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
