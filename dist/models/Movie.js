"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var movieSchema = (0, _mongoose.Schema)({
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

var _default = (0, _mongoose.model)('Movie', movieSchema);

exports["default"] = _default;