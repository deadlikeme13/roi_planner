var express = require('express');
var fileUploadController = require('../controllers/file_upload');
var router = express.Router();

router
  .get('/', function(req, res, next) {
    res.render('index', { title: 'Return on Investment Planner' });
  })
  .post('/', function(req, res){
    res.render('data', { title: 'Collected Data', data: req.body})
    //console.log('My house price', req.body.house_price)
    console.log('My Data', req.body);
  })
  .post('/schedule', fileUploadController.uploadFile)
    
/* It starts from the root. That is why you need '/schedule' path
router.get('/schedule', function (req, res) {
  res.render('schedule', { title: 'Your Schedule' });
})
*/

module.exports = router;