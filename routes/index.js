var express = require('express');
var router = express.Router();

var dbconnection = process.env.APP_MONGODB_CONNECTION || "no-db-connection";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { dbconnection: dbconnection});
});

module.exports = router;