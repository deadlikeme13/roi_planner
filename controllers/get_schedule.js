const superagent = require('superagent');
//const superagentJsonapify = require ('superagent-jsonapify');
const schedule_base_url = "https://restplanner-200203.appspot.com/schedule/";

//superagentJsonapify(superagent);

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

var result = {}

exports.getSchedule = function (req, res) {
  console.log("My data: ",req.body);
  //https://restplanner-200203.appspot.com/schedule/" + data.pay_frequency +
  //"?year=" + start_date[0] + "&month=" + start_date[1] + "&day=" + start_date[2]
  // + "&years=" + data.term + "&step=1
  var current_periodicity = periodicity [req.body.pay_frequency][0];
  console.log("Current Periodicity: ", current_periodicity);
  var schedule_date = dateSplit(req.body.pay_start);
  var params = { year: schedule_date[0], month: schedule_date[1], day: schedule_date[2], years: req.body.term, step: periodicity [req.body.pay_frequency][1] }
  console.log("My params: ", params);
  
  (async () => {
    try {
      const result1 = await superagent
        .get(schedule_base_url + current_periodicity)
        .query(params) // sends a JSON post body
        //.set('X-API-Key', 'foobar')
        //.set('accept', 'json')
        .then(res => {
          //console.log('yay got ' + JSON.stringify(res.body));
          result = res.body
        })
      //console.log(result);
    } catch (err) {
      console.error(err);
    }
  })();

  /*
  superagent
    .get(schedule_base_url + current_periodicity)
    .query(params) // sends a JSON post body
    //.set('X-API-Key', 'foobar')
    //.set('accept', 'json')
    .then(res => {
      console.log('yay got ' + JSON.stringify(res.body));
      result = res.body
    })
    /*
    .end((err, res) => {
      if (err) {
        console.log("There was an error!")
      }
    })
    */
  console.log('Result: ',result)
  return result;

}