"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _comment = require("../controllers/comment.controller");

var router = (0, _express.Router)();
router.get('/', _comment.getComments);
var _default = router;
exports["default"] = _default;