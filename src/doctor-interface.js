$(document).ready(function() {
  $('#doctorSymptom').click(function() {
    let symptom = $('#symptom').val();
    $('#symptom').val("");


    let symptomQuery = new SymptomQuery();  // create instance of SymptomQuery class
    let promise = symptomQuery.getDoctorBySymptom(symptom);  // call the instance method and pass in user input

    promise.then(function(response) {
      body = JSON.parse(response);
      $('.showSymptom').text(body);
      // $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
