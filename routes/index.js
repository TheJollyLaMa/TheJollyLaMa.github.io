var express = require('express');
var router = express.Router();

/* GET Backend Homepage. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
// // Get ReadMe Page
// router.get('/readme', function(req, res, next) {
//   res.render('/README.md');
// });


module.exports = router;
