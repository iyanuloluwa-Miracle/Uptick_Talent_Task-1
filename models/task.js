const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  startDate: Date, 
  endDate: Date,   
});

module.exports = mongoose.model('Task', taskSchema);
