const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const { creatCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  await task.save();
  res.status(200).json({ task });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(creatCustomError(`No task found! with id: ${taskID}`, 404));
  }
  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedTask) {
    return next(creatCustomError(`No task found! with id: ${taskID}`, 404));
  }
  res.status(200).json({ task: updatedTask });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const deletedTask = await Task.findOneAndDelete({ _id: taskID });
  if (!deletedTask) {
    return next(creatCustomError(`No task found! with id: ${taskID}`, 404));
  }
  res.status(200).json({ task: deletedTask });
});

const editTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
    overwrite: true,
  });
  if (!updatedTask) {
    return next(creatCustomError(`No task found! with id: ${taskID}`, 404));
  }
  res.status(200).json({ task: updatedTask });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
};

// res.status(200).json({ tasks, count: tasks.length });
// res.status(200).json({ success: true, data: tasks });
// res.status(200).json({ status: "success", data: { tasks, nHits: tasks.length } });
//errors
// const error = new Error(`No task found! with id: ${taskID}`);
// error.status = 404;
// return next(error);
// return res.status(404).json({ error: `No task found! with id: ${taskID}` });