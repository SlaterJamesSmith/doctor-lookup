import { SymptomQuery } from "../src/doctor-backend.js";

$(document).ready(function() {
  $('#doctorSymptom').click(function() {
    let symptom = $('#symptom').val();
    $('#symptom').val("");


    let symptomQuery = new SymptomQuery();  // create instance of SymptomQuery class
    let promise = symptomQuery.getDoctorBySymptom(symptom);  // call the instance method and pass in user input

    promise.then(function(response) {
      // let body = JSON.parse(response);
      // // let name = `${doctors[0].profile.first_name} ${doctors[0].profile.last_name}`
      // // console.log(doctors[0].profile.first_name);
      // // console.log(name);
      // let doctors = body.data;
      // let doctorsArry = [];
      // doctors.forEach(function(doctor) {
      //   doctorsArry.push(`${doctor.profile.first_name} ${doctor.profile.last_name}`);
      //   console.log(doctorsArry);
      // });
      let doctorsArry2 = symptomQuery.getDoctorList(response);
      $('.showSymptom').text(`Doctors who can help you with ${symptom} in Portland: ${doctorsArry2.join(", ")}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
