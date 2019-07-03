"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _verifyToken = _interopRequireDefault(require("./verifyToken"));

var _post = require("../controllers/post.controller");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
router.get('/', _verifyToken["default"], _post.getPostList);
router.get('/:postId', _post.getPostById);
router.post('/', _verifyToken["default"], _post.registerNewPost);
router["delete"]('/:postId', _verifyToken["default"], _post.deletePost);
router.put('/:postId', _verifyToken["default"], _post.updatePost);
var _default = router;
exports["default"] = _default;