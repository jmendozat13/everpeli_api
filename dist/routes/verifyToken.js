"use strict";

var jwt = require('jsonwebtoken');

module.exports = function auth(req, res, next) {
  var token = req.header('auth-token');
  if (!token) return res.status(401).send('Access Denied');

  try {
    var verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send('Invalid Token');
  }
};