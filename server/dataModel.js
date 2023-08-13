// dataModel.js
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other fields as needed
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
