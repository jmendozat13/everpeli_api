"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostList = getPostList;
exports.getPostById = getPostById;
exports.registerNewPost = registerNewPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;

var _Post = _interopRequireDefault(require("../models/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPostList(_x, _x2) {
  return _getPostList.apply(this, arguments);
}

function _getPostList() {
  _getPostList = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var posts;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Post["default"].find();

          case 3:
            posts = _context.sent;
            res.json(posts);
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              message: error
            });

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getPostList.apply(this, arguments);
}

function getPostById(_x3, _x4) {
  return _getPostById.apply(this, arguments);
}

function _getPostById() {
  _getPostById = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var post;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _Post["default"].findById(req.params.postId);

          case 3:
            post = _context2.sent;
            res.json(post);
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
  return _getPostById.apply(this, arguments);
}

function registerNewPost(_x5, _x6) {
  return _registerNewPost.apply(this, arguments);
}

function _registerNewPost() {
  _registerNewPost = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, title, description, post, savePost;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, title = _req$body.title, description = _req$body.description;

            if (!(title && description)) {
              _context3.next = 15;
              break;
            }

            post = new _Post["default"]({
              title: title,
              description: description
            });
            _context3.prev = 3;
            _context3.next = 6;
            return post.save();

          case 6:
            savePost = _context3.sent;
            res.json(savePost);
            _context3.next = 13;
            break;

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](3);
            res.status(500).json({
              message: _context3.t0
            });

          case 13:
            _context3.next = 16;
            break;

          case 15:
            res.status(500).json({
              error: 'There was an error.'
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[3, 10]]);
  }));
  return _registerNewPost.apply(this, arguments);
}

function deletePost(_x7, _x8) {
  return _deletePost.apply(this, arguments);
}

function _deletePost() {
  _deletePost = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var postId, _post;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            postId = req.params.postId;
            _context4.next = 4;
            return _Post["default"].findByIdAndDelete(postId);

          case 4:
            _post = _context4.sent;

            if (_post != null) {
              res.json(_post);
            } else {
              res.status(500).json({
                message: "document not found!"
              });
            }

            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            res.status(500).json({
              message: _context4.t0
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _deletePost.apply(this, arguments);
}

function updatePost(_x9, _x10) {
  return _updatePost.apply(this, arguments);
}

function _updatePost() {
  _updatePost = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee5(req, res) {
    var postId, title, _updatePost2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            postId = req.params.postId;
            title = req.body.title;
            _context5.prev = 2;
            _context5.next = 5;
            return _Post["default"].updateOne({
              _id: postId
            }, {
              $set: {
                title: title
              }
            });

          case 5:
            _updatePost2 = _context5.sent;
            res.json(_updatePost2);
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](2);
            res.status(500).json({
              message: _context5.t0
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[2, 9]]);
  }));
  return _updatePost.apply(this, arguments);
}