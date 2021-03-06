export class SymptomQuery {
  getDoctorBySymptom(symptom) {
    let Promise = require("es6-promise").Promise;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

  }

  getDoctorByName(name) {
    let Promise = require("es6-promise").Promise;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_location=45.5122%2C%20-122.6587&sort=full-name-asc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

  }

  getDoctorList(response) {
    let body = JSON.parse(response);
    let doctors = body.data;
    let doctorsArry = [];
    doctors.forEach(function(doctor) {
      doctorsArry.push(`${doctor.profile.first_name} ${doctor.profile.last_name}`);
    });
    return doctorsArry;
  }


}
