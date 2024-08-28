const mongoose = require('mongoose');

const eactivitySchema = new mongoose.Schema({
  sname: String,
  rollNo:String,
  batches: String,
  aname: String,
  agroup:String,
  competitionLevel:String,
  fdate:Date,
  tdate:Date,
  host: String,
  prizes:String
});

const Eactivity = mongoose.model('Eactivity', eactivitySchema);

module.exports = Eactivity;
