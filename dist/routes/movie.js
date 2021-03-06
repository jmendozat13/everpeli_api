"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _verifyToken = _interopRequireDefault(require("./verifyToken"));

var _movie = require("../controllers/movie.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.post('/', _verifyToken["default"], _movie.registerNewMovie);
router.get('/', _movie.getAllMovie);
var _default = router;
exports["default"] = _default;