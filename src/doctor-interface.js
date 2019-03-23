import { SymptomQuery } from "../src/doctor-backend.js";

$(document).ready(function() {

  $('#doctorRefresh').click(function() {
    console.log("hi")
    location.reload(true);
  });

  $('#doctorSymptom').click(function() {
    // $('.showSymptom').text("new search");
    let symptom = $('#symptom').val();
    $('#symptom').val("");
    $('#doctorRefresh').show()
    $('.startingButtons').hide();


    let symptomQuery = new SymptomQuery();  // create instance of SymptomQuery class
    let promise = symptomQuery.getDoctorBySymptom(symptom);  // call the instance method and pass in user input

    promise.then(function(response) {
      let names = symptomQuery.getDoctorList(response);
      if (names[0] === undefined) {
        $('.showSymptom').text("no matches")
      } else {
        let docObj = JSON.parse(response)
        names.forEach(function(name, index) {
          let phones = (docObj.data[index].practices[0].phones);
          let phoneList = [];
          phones.forEach(function(phone) {
            phoneList.push(phone["type"]+ ":");
            phoneList.push(phone["number"]);
          });
          let phoneStr = phoneList.join(" ");
          let practices = docObj.data[index].practices[0];
          let website = practices["website"];
          let address = practices["visit_address"].street;
          let patients = practices.accepts_new_patients
          let infos = [address, phoneStr, website, patients];
          // console.log(practices["website"]);
          $('.showSymptom').append(`<ol>${name}</ol><li>address: ${infos[0]}</li><li>${infos[1]}</li><li>website: ${infos[2]}</li><li>${infos[3]}</li>`);
          document.body.innerHTML = document.body.innerHTML.replace('undefined', 'none')
          document.body.innerHTML = document.body.innerHTML.replace('true', 'Curretnly accepting patients')
          document.body.innerHTML = document.body.innerHTML.replace('false', 'Not accepting patients')
        })
      }
    }, function(error) {
      $('.showSymptom').text(`There was an error processing your request: ${error.message}`);
    });
  });

  $('#doctorName').click(function() {
    // $('.showSymptom').text("new search");
    let name = $('#name').val();
    $('#name').val("");
    $('#doctorRefresh').show()
    $('.startingButtons').hide();

    let symptomQuery = new SymptomQuery();  // create instance of SymptomQuery class
    let promise = symptomQuery.getDoctorByName(name);  // call the instance method and pass in user input

    promise.then(function(response) {
      let names = symptomQuery.getDoctorList(response);
      if (names[0] === undefined) {
        $('.showSymptom').text("no matches")
      } else {
        let docObj = JSON.parse(response)
        names.forEach(function(name, index) {
          let phones = (docObj.data[index].practices[0].phones);
          let phoneList = [];
          phones.forEach(function(phone) {
            phoneList.push(phone["type"]+ ":");
            phoneList.push(phone["number"]);
          });
          let phoneStr = phoneList.join(" ");
          let practices = docObj.data[index].practices[0];
          let website = practices["website"];
          let address = practices["visit_address"].street;
          let patients = practices.accepts_new_patients
          let infos = [address, phoneStr, website, patients];
          // console.log(practices["website"]);
          $('.showSymptom').append(`<ol>${name}</ol><li>address: ${infos[0]}</li><li>${infos[1]}</li><li>website: ${infos[2]}</li><li>${infos[3]}</li>`);
          document.body.innerHTML = document.body.innerHTML.replace('undefined', 'none')
          document.body.innerHTML = document.body.innerHTML.replace('true', 'Curretnly accepting patients')
          document.body.innerHTML = document.body.innerHTML.replace('false', 'Not accepting patients')
        });
      }
    }, function(error) {
      $('.showSymptom').text(`There was an error processing your request: ${error.message}`);
    });
  });

});
