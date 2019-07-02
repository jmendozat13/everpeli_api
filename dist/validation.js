"use strict";

var Joi = require('@hapi/joi');

var registerUserValidation = function registerUserValidation(data) {
  var schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  };
  return Joi.validate(data, schema);
};

var loginValidation = function loginValidation(data) {
  var schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  };
  return Joi.validate(data, schema);
};

var registerMovieValidation = function registerMovieValidation(data) {
  var schema = {
    backdrop_path: Joi.string().required(),
    poster_path: Joi.string().required(),
    original_title: Joi.string().required().max(250).min(3),
    overview: Joi.string().required()
  };
  return Joi.validate(data, schema);
};

module.exports.registerUserValidation = registerUserValidation;
module.exports.loginValidation = loginValidation;
module.exports.registerMovieValidation = registerMovieValidation;