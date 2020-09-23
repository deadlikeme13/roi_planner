var express = require('express');
var router = express.Router();
//var Schedule = require('../models/schedule');

//It starts from schedule/ folder, so you don't need another 'schedule/' path
router.get('/', function (req, res) {
  /*
  Schedule.find(function (err, schedule) {
    if (err) console.log(err)

    res.render('schedule', { schedules : schedule });
  });
  */
  res.render('schedule', { title: 'Your Schedule' });
})

module.exports = router;