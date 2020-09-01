var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Return on Investment Planner' });
});

/* It starts from the root. That is why you need '/schedule' path
router.get('/schedule', function (req, res) {
  res.render('schedule', { title: 'Your Schedule' });
})
*/

module.exports = router;