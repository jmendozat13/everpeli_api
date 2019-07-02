"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var router = require('express').Router();

var User = require('../models/User');

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var _require = require('../validation'),
    registerUserValidation = _require.registerUserValidation,
    loginValidation = _require.loginValidation;

router.post('/register',
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, password, _registerUserValidati, error, emailExist, salt, hashedPassword, user, saveUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password; //Lets validate the data before we a user

            _registerUserValidati = registerUserValidation(req.body), error = _registerUserValidati.error;

            if (!error) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).send(error.details[0].message));

          case 4:
            _context.next = 6;
            return User.findOne({
              email: email
            });

          case 6:
            emailExist = _context.sent;

            if (!emailExist) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).send('Email already exists'));

          case 9:
            _context.next = 11;
            return bcrypt.genSalt(10);

          case 11:
            salt = _context.sent;
            _context.next = 14;
            return bcrypt.hash(password, salt);

          case 14:
            hashedPassword = _context.sent;
            //Create a new user
            user = new User({
              name: name,
              email: email,
              password: hashedPassword
            });
            _context.prev = 16;
            _context.next = 19;
            return user.save();

          case 19:
            saveUser = _context.sent;
            res.json({
              name: saveUser.name,
              email: saveUser.email
            });
            _context.next = 26;
            break;

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](16);
            res.status(400).send(_context.t0);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[16, 23]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.post('/login',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, email, password, _loginValidation, error, user, validPass, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password; //Lets validate the data

            _loginValidation = loginValidation(req.body), error = _loginValidation.error;

            if (!error) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).send(error.details[0].message));

          case 4:
            _context2.next = 6;
            return User.findOne({
              email: email
            });

          case 6:
            user = _context2.sent;

            if (user) {
              _context2.next = 9;
              break;
            }

            return _context2.abrupt("return", res.status(400).send('Email is not found'));

          case 9:
            _context2.next = 11;
            return bcrypt.compare(password, user.password);

          case 11:
            validPass = _context2.sent;

            if (validPass) {
              _context2.next = 14;
              break;
            }

            return _context2.abrupt("return", res.status(400).send('Invalid password'));

          case 14:
            //create an assing a token 
            token = jwt.sign({
              _id: user._id
            }, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = router;