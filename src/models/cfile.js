const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  initials: { type: String, required: true },
  fullNames: { type: String, required: true },
  lastName: { type: String, required: true },
  idNumber: { type: String, required: true },
  citizenship: { type: String, required: true },
  gender: { type: String, required: true },
  ethnicity: { type: String, required: true },
  maritalStatus: { type: String, required: true },
  language: { type: String, required: true },
  religion: { type: String, required: true },
  notes: { type: String, required: false}
});

module.exports = mongoose.model('Cfile', postSchema);
