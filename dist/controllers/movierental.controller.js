"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createMovieRental = createMovieRental;
exports.getMovieRental = getMovieRental;

var _MovieRental = _interopRequireDefault(require("../models/MovieRental"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function createMovieRental(_x, _x2) {
  return _createMovieRental.apply(this, arguments);
}

function _createMovieRental() {
  _createMovieRental = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, conditions, userid, returndate, daterental, newmovierental;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, conditions = _req$body.conditions, userid = _req$body.userid, returndate = _req$body.returndate, daterental = _req$body.daterental;
            _context.prev = 1;
            _context.next = 4;
            return _MovieRental["default"].create({
              conditions: conditions,
              userid: userid,
              returndate: returndate,
              daterental: daterental
            }, {
              fields: ['conditions', 'userid', 'returndate', 'daterental']
            });

          case 4:
            newmovierental = _context.sent;

            if (newmovierental) {
              res.json(newmovierental);
            }

            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(500).json({
              message: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));
  return _createMovieRental.apply(this, arguments);
}

function getMovieRental(_x3, _x4) {
  return _getMovieRental.apply(this, arguments);
}

function _getMovieRental() {
  _getMovieRental = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var movierentals;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _MovieRental["default"].findAll();

          case 3:
            movierentals = _context2.sent;
            res.json(movierentals);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: _context2.t0
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return _getMovieRental.apply(this, arguments);
}