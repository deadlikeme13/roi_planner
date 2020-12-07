const superagent = require('superagent');
const schedule_base_url = "https://restplanner-200203.appspot.com/schedule/";

//dictionary
const periodicity = {
  "monthly": ["monthly", "1"],
  "semi-monthly": ["monthly", "0.5"],
  "weekly": ["weekly", "1"],
  "bi-weekly": ["weekly", "2"]
}

const dateSplit = (date) => {
    date_split = date.split("-");
    return date_split;
}

exports.getSchedule = function (req, res) {
  //console.log("My data: ",req.body);
  var current_periodicity = periodicity [req.body.pay_frequency][0];
  //console.log("Current Periodicity: ", current_periodicity);
  var schedule_date = dateSplit(req.body.pay_start);
  var params = { year: schedule_date[0], month: schedule_date[1], day: schedule_date[2], years: req.body.term, step: periodicity [req.body.pay_frequency][1] }
  //console.log("My params: ", params);
  var mortgage_setup = { house_price: req.body.house_price, downpayment: req.body.downpayment, interest: req.body.interest }
  console.log("Mortgage data: ", mortgage_setup)
  
  var mortgage_setup_promise = (async () => {
    try {
      const result = await superagent
        .get(schedule_base_url + current_periodicity)
        .query(params) // sends a JSON post body/
        .then(res => {
          //console.log('yay got ' + JSON.stringify(res.body));
          //console.log("Result in Function: ", res.body)
          return res.body;
        })
      console.log("Result 1: ", result);
      mortgage_setup.schedule = result.schedule
      console.log("Result 2: ", mortgage_setup)
      return mortgage_setup;
    } catch (err) {
      console.error(err);
    }

  })();

  return mortgage_setup_promise;
  
}