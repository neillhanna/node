var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Home' });
});


// router.get('*', function(req, res) {
//   res.render('index', { title: 'My website' });
// });

module.exports = router;
