"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('express'),
    Router = _require.Router;

var router = Router();

var Movie = require('../models/Movie');

var verify = require('./verifyToken');

var _require2 = require('../validation'),
    registerMovieValidation = _require2.registerMovieValidation;

router.post('/', verify,
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, backdrop_path, poster_path, original_title, overview, _registerMovieValidat, error, movieExist, movie, saveMovie;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, backdrop_path = _req$body.backdrop_path, poster_path = _req$body.poster_path, original_title = _req$body.original_title, overview = _req$body.overview;
            _registerMovieValidat = registerMovieValidation(req.body), error = _registerMovieValidat.error;

            if (!error) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(400).send(error.details[0].message));

          case 4:
            _context.next = 6;
            return Movie.findOne({
              original_title: original_title
            });

          case 6:
            movieExist = _context.sent;

            if (!movieExist) {
              _context.next = 9;
              break;
            }

            return _context.abrupt("return", res.status(400).send('Original_title already exists'));

          case 9:
            movie = new Movie({
              backdrop_path: backdrop_path,
              poster_path: poster_path,
              original_title: original_title,
              overview: overview
            });
            _context.prev = 10;
            _context.next = 13;
            return movie.save();

          case 13:
            saveMovie = _context.sent;
            res.json(saveMovie);
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](10);
            res.status(500).json({
              message: _context.t0
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 17]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/',
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var movies;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return Movie.find();

          case 3:
            movies = _context2.sent;
            res.json(movies);
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            res.status(500).json({
              message: error
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
module.exports = router;