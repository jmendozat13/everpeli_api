"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = auth;

var _jsonwebtoken = require("jsonwebtoken");

function auth(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    var verified = (0, _jsonwebtoken.verify)(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
}