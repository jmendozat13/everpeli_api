"use strict";

var _require = require('express'),
    Router = _require.Router;

var router = Router();
router.get('/', function (req, res) {
  res.json({
    title: "Hello EverSaaS"
  });
});
module.exports = router;