const router = require('express').Router();
const taskController = require('../controllers/taskController');

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

// Create a new task
router.post('/tasks', taskController.createTask);

// Get all tasks
router.get('/tasks', taskController.getAllTasks);

// Get a task by ID
router.get('/tasks/:id', taskController.getTaskById);

// Update a task by ID
router.put('/tasks/:id', taskController.updateTaskById);

// Delete a task by ID
router.delete('/tasks/:id', taskController.deleteTaskById);

module.exports = router;
