"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MovieRentalDetails = _database.sequelize.define('movie_rental_details', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  movieid: {
    type: _sequelize["default"].TEXT
  },
  state: {
    type: _sequelize["default"].TEXT
  },
  isreturn: {
    type: _sequelize["default"].BOOLEAN
  },
  movie_rentalId: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

var _default = MovieRentalDetails;
exports["default"] = _default;