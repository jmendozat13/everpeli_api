"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerMovieValidation = exports.loginValidation = exports.registerUserValidation = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var registerUserValidation = function registerUserValidation(data) {
  var schema = {
    name: _joi["default"].string().min(6).required(),
    email: _joi["default"].string().min(6).required().email(),
    password: _joi["default"].string().min(6).required()
  };
  return _joi["default"].validate(data, schema);
};

exports.registerUserValidation = registerUserValidation;

var loginValidation = function loginValidation(data) {
  var schema = {
    email: _joi["default"].string().min(6).required().email(),
    password: _joi["default"].string().min(6).required()
  };
  return _joi["default"].validate(data, schema);
};

exports.loginValidation = loginValidation;

var registerMovieValidation = function registerMovieValidation(data) {
  var schema = {
    backdrop_path: _joi["default"].string().required(),
    poster_path: _joi["default"].string().required(),
    original_title: _joi["default"].string().required().max(250).min(3),
    overview: _joi["default"].string().required()
  };
  return _joi["default"].validate(data, schema);
};

exports.registerMovieValidation = registerMovieValidation;