const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: false },
  initials: { type: String, required: true },
  fullNames: { type: String, required: true },
  lastName: { type: String, required: true },
  idNumber: { type: String, required: true },
  citizenship: { type: String, required: true },
  gender: { type: String, required: false },
  ethnicity: { type: String, required: false },
  maritalStatus: { type: String, required: false },
  language: { type: String, required: false },
  religion: { type: String, required: true },
});

module.exports = mongoose.model('Cfile', postSchema);
