'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PollSchema = new Schema({
  pollQuestion: String,
  pollSelection1: String,
  pollSelection2: String
});

module.exports = mongoose.model('Poll', PollSchema);