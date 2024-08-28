const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  batches: String,
  rollNo:String,
  sname: String,
  aname: String,
  agroup:String,
  host: String,
  competitionLevel:String,
  fdate:Date,
  tdate:Date,
  // year:String,
  // description: String,
  prizes:String
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
