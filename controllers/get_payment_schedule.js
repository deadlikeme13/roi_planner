const superagent = require('superagent');
const schedule_base_url = "https://restplanner-200203.appspot.com/mortgage";

exports.getPaymentSchedule = function (schedule) {
  //console.log("Mortgage Setup Data: ", schedule)
  
  var payment_schedule_promise = (async () => {
    try {
      const result = await superagent
        .post(schedule_base_url)
        .send(schedule) // sends a JSON post body/
        .then(res => {
          //console.log("Result in Payment Schedule Function: ", res.body)
          return res.body;
        })
      //console.log("Result in Payment Schedule 1: ", result);
      return result;
    } catch (err) {
      console.error(err);
    }

  })();

  return payment_schedule_promise;
  
}