"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database");

var _MovieRentalDetails = _interopRequireDefault(require("./MovieRentalDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MovieRental = _database.sequelize.define('movie_rental', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  conditions: {
    type: _sequelize["default"].TEXT
  },
  userid: {
    type: _sequelize["default"].TEXT
  },
  returndate: {
    type: _sequelize["default"].DATE
  },
  daterental: {
    type: _sequelize["default"].DATE
  }
}, {
  timestamps: false
});

MovieRental.hasMany(_MovieRentalDetails["default"], {
  foreingKey: 'movie_rentalId',
  sourceKey: 'id'
});

_MovieRentalDetails["default"].belongsTo(MovieRental, {
  foreingKey: 'movie_rentalId',
  sourceKey: 'id'
});

var _default = MovieRental;
exports["default"] = _default;