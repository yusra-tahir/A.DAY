const db = require('../dbConfig/init');

const Habit = require('./Habit');
const User = require('./User');

class Tracker {
  constructor(data) {
    this.id = data.id;
    this.habit = data.habit;
    this.date = data.date;
    this.day = data.day;
    this.startTime = data.start_time;
    this.endTime = data.end_time;
    this.spentTime = data.spent_time;
  }

  ////all the different functions get/create/update/delete
}

module.exports = Tracker;
