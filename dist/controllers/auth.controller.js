"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerUser = registerUser;
exports.loginUser = loginUser;

var _User = _interopRequireDefault(require("../models/User"));

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _validation = require("../validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function registerUser(_x, _x2) {
  return _registerUser.apply(this, arguments);
}

function _registerUser() {
  _registerUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, email, password, _registerUserValidati, error, emailExist, salt, hashedPassword, user, saveUser;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, email = _req$body.email, password = _req$body.password;
            _context.prev = 1;
            _registerUserValidati = (0, _validation.registerUserValidation)(req.body), error = _registerUserValidati.error;

            if (!error) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", res.status(400).send(error.details[0].message));

          case 5:
            _context.next = 7;
            return _User["default"].findOne({
              email: email
            });

          case 7:
            emailExist = _context.sent;

            if (!emailExist) {
              _context.next = 10;
              break;
            }

            return _context.abrupt("return", res.status(400).send('Email already exists'));

          case 10:
            _context.next = 12;
            return (0, _bcryptjs.genSalt)(10);

          case 12:
            salt = _context.sent;
            _context.next = 15;
            return (0, _bcryptjs.hash)(password, salt);

          case 15:
            hashedPassword = _context.sent;
            user = new _User["default"]({
              name: name,
              email: email,
              password: hashedPassword
            });
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
            _context.t0 = _context["catch"](1);
            res.status(500).send(_context.t0);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 23]]);
  }));
  return _registerUser.apply(this, arguments);
}

function loginUser(_x3, _x4) {
  return _loginUser.apply(this, arguments);
}

function _loginUser() {
  _loginUser = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var _req$body2, email, password, _loginValidation, error, user, validPass, token;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _loginValidation = (0, _validation.loginValidation)(req.body), error = _loginValidation.error;

            if (!error) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", res.status(400).send(error.details[0].message));

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return _User["default"].findOne({
              email: email
            });

          case 7:
            user = _context2.sent;

            if (user) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(400).send('Email is not found'));

          case 10:
            _context2.next = 12;
            return (0, _bcryptjs.compare)(password, user.password);

          case 12:
            validPass = _context2.sent;

            if (validPass) {
              _context2.next = 15;
              break;
            }

            return _context2.abrupt("return", res.status(400).send('Invalid password'));

          case 15:
            token = (0, _jsonwebtoken.sign)({
              _id: user._id
            }, process.env.TOKEN_SECRET);
            res.header('auth-token', token).send(token);
            _context2.next = 22;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](4);
            res.status(500).send(_context2.t0);

          case 22:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 19]]);
  }));
  return _loginUser.apply(this, arguments);
}