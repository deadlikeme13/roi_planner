var express = require('express');
var getScheduleController = require('../controllers/get_schedule');
var fileUploadController = require('../controllers/file_upload');
var router = express.Router();

router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'Return on Investment Planner' });
    //console.log('My Date', string)
  })
  //Posting Received Schedule
  .post('/', function(req, res) {
    var schedule_promise = getScheduleController.getSchedule(req, res);
    schedule_promise.then (function(schedule) {
      //console.log('Schedule Received', schedule)   
      res.render('schedule_view', { title: 'Collected Schedule', schedule: JSON.stringify(schedule)})
    })
  })
  /*
  //Posting Collected Data
  .post('/', function(req, res){
    var date = "2010-10-25";
    var string = date.split("-");
    var my_date = req.body.pay_start.split("-");
    res.render('data', { title: 'Collected Data', data: req.body, date: my_date})
  })
  */
  .post('/schedule', fileUploadController.uploadFile)
    
/* It starts from the root. That is why you need '/schedule' path
router.get('/schedule', function (req, res) {
  res.render('schedule', { title: 'Your Schedule' });
})
*/

module.exports = router;