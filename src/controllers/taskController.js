const Task = require("../models/Task");

// CREATE TASK (JWT user wise)
exports.createTask = async (req, res) => {
  try {
    const task = await Task.create({
      ...req.body,
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Task created",
      data: task
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL TASKS (only logged-in user)
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });

    res.json({
      success: true,
      data: tasks
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE TASK (user specific)
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({
      success: true,
      message: "Task updated",
      data: task
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE TASK (user specific)
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({
      success: true,
      message: "Task deleted"
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};