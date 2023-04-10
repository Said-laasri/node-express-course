const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
