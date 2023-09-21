require('../models/database')
const Task = require('../models/task');

// Create a new task
exports.createTask = async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Get a task by ID
exports.getTaskById = async (req, res) => {
    try {
      const task = await Task.findById(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
};

// Update a task by ID
exports.updateTaskById = async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
};



// Delete a task by ID
exports.deleteTaskById = async (req, res) => {
    try {
      const task = await Task.findByIdAndDelete(req.params.id);
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }
      res.status(204).json({ message: 'Task deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  
