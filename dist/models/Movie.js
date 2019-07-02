"use strict";

var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
  backdrop_path: {
    type: String,
    required: true
  },
  poster_path: {
    type: String,
    required: true
  },
  original_title: {
    type: String,
    required: true,
    max: 250,
    min: 3
  },
  overview: {
    type: String,
    required: true
  },
  release_date: {
    type: Date,
    "default": Date.now
  }
});
module.exports = mongoose.model('Movie', movieSchema);