var express = require('express');
var router = express.Router();

//It starts from schedule/ folder, so you don't need another 'schedule/' path
router.get('/', function (req, res) {
  res.render('schedule', { title: 'Your Schedule' });
})

module.exports = router;