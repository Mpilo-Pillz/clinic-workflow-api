const mongoose = require('mongoose');

const consultationSchema = mongoose.Schema({
  summary: { type: String, required: true },
  date: {string }
  
});

module.exports = mongoose.model('Consultation', consultationSchema);
