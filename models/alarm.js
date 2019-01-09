const mongoose = require('mongoose');

let AlarmSchema = mongoose.Schema({
  id:{
        type: Number,
        required: true,
        unique: true
    },
    text:{
        type: String,
        required: true,
        uppercase: true,
    },
    date: {
      type: Date,
      default: Date.now
    },
    votes: {
      type: Number,
      default: 0
    }
});

const Alarm = module.exports = mongoose.model('Alarm', AlarmSchema);
