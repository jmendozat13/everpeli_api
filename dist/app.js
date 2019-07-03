"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireWildcard(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _mongoose = require("mongoose");

var _cors = _interopRequireDefault(require("cors"));

var _path = require("path");

require("dotenv/config");

var _index = _interopRequireDefault(require("./routes/index"));

var _post = _interopRequireDefault(require("./routes/post"));

var _comments = _interopRequireDefault(require("./routes/comments"));

var _auth = _interopRequireDefault(require("./routes/auth"));

var _movie = _interopRequireDefault(require("./routes/movie"));

var _movierental = _interopRequireDefault(require("./routes/movierental"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

var app = (0, _express["default"])();
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);
(0, _mongoose.connect)(process.env.DB_CONNECTION, {
  useNewUrlParser: true
}, function () {
  return console.log('connected to DB!');
});
app.use((0, _express.json)());
app.use((0, _morgan["default"])('dev'));
app.use((0, _cors["default"])());
app.use(_index["default"]);
app.use('/api/posts/', _post["default"]);
app.use('/api/comments/', _comments["default"]);
app.use('/api/auth/', _auth["default"]);
app.use('/api/movies/', _movie["default"]);
app.use('/api/movierental/', _movierental["default"]);
app.use(function (req, res, next) {
  res.sendFile((0, _path.join)(__dirname + '/error/404.html'));
});
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.sendFile((0, _path.join)(__dirname + '/error/503.html'));
});
var _default = app;
exports["default"] = _default;