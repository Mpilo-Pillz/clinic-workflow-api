const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  notes: [
    {
    date: { type: Date | String },
    diagnosis: { type: String },
    medication: { type: String }
  }
]
});

module.exports = mongoose.model('Cfile', postSchema);
