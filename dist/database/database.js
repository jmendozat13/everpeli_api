"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize["default"](process.env.BD_SQL_DATABASE, process.env.BD_SQL_USERNAME, process.env.BD_SQL_PASSWORD, {
  host: process.env.BD_SQL_HOSTNAME,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false,
  define: {
    freezeTableName: true
  }
});
exports.sequelize = sequelize;