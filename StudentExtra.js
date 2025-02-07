const mongoose = require('mongoose');

const StudentExtraSchema = new mongoose.Schema({
  rollNo: { type: String, required: true, unique: true },
  githubLink: { type: String },
  profilePicture: { type: String },
  certificate: { type: String }
});

const StudentExtra = mongoose.model('StudentExtra', StudentExtraSchema);

module.exports = StudentExtra;
