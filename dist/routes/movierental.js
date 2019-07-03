"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _verifyToken = _interopRequireDefault(require("./verifyToken"));

var _movierental = require("../controllers/movierental.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/', _movierental.createMovieRental);
router.get('/', _verifyToken["default"], _movierental.getMovieRental);
var _default = router;
exports["default"] = _default;