const mongoose = require('mongoose');

const cFileSchema = mongoose.Schema({
  _id: { type: String, required: true},
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
  income: {type: String, required: true},
  notes: [
    {
    date: { type: String },
    diagnosis: { type: String, required: true },
    prescription: { type: String, required: true },
    imagePath: { type: String, required: true}
  }
]
});

module.exports = mongoose.model('Cfile', cFileSchema);
