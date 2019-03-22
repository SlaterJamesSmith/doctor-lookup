$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.get(https:`https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&user_location=45.5122%2C%20-122.6587&skip=0&limit=10&user_key=${process.exports.apiKey}`

      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.exports.apiKey}`).then(function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`)
      $('.showErrors').text("");
      // const weatherObj = response.weather[0];
      // // $('.animation').text(`${weatherObj.description}`)
      // if (response.weather[0].main === 'Clear') {
      //   $('.animation').text("clear clear sky sky");
      // } else if (response.weather[0].main === 'Clouds') {
      //   $('.animation').text("cloudy");
      // } else if (response.weather[0].main === 'Snow') {
      //   $('.animation').text("snow");
      // } else if (response.weather[0].main === 'Rain') {
      //   $('.animation').text("rain");
      // } else {
      //   $('.animation').text("");
      // }

    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
      $('.animation').text("")
      $('.showTemp').text("")
      $('.showHumidity').text("")
    });

    let place = city.split(",");
    let placeStr = place[0].split(" ").join("-");
    $.get(`https://api.teleport.org/api/urban_areas/slug:${placeStr}/images/`).then(function(response) {
      let placeObj = response.photos[0].image.web;
      // let placeObjTwo = placeObj[0];
      $('.photos').text(`<img src="${placeObj}">`);
      console.log(response)
      // $('.photos').text(placeStr);
    });
  });


  // $('#weatherLocation').click(function() {
  //   let cityTwo = $('#location').val();
  //   let place = cityTwo.split(",");
  //   let placeStr = place[0].split(" ").join("-");
  //   $.get(`https://api.teleport.org/api/urban_areas/slug:${placeStr}/images`).then(function(response) {
  //     const placeObj = response.photos[1].web;
  //     $('.photos').text(`<img src="${placeObj}">`);
  //     $('.photos').text(cityTwo);
  //     // if (response.weather[0].main === 'Clear') {
  //     // } else {
  //     //   $('.animation').text("");
  //     // }
  //   }).fail(function(error) {
  //     // $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
  //     // $('.animation').text("")
  //     // $('.showTemp').text("")
  //     // $('.showHumidity').text("")
  //   });
  // });

  // https://d13k13wj6adfdf.cloudfront.net/urban_areas/baku_web-71bcbddb43.jpg
});
// });
