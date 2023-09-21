const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
  startDate: Date, // Add start date field
  endDate: Date,   // Add end date field
});

module.exports = mongoose.model('Task', taskSchema);
