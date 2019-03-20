$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");
    $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`).then(function(response) {
      $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp} degrees.`)
      $('.showErrors').text("");
      const weatherObj = response.weather[0];
      // $('.animation').text(`${weatherObj.description}`)
      if (response.weather[0].main === 'Clear') {
        $('.animation').text("clear clear sky sky");
      } else if (response.weather[0].main === 'Clouds') {
        $('.animation').text("cloudy");
      } else if (response.weather[0].main === 'Snow') {
        $('.animation').text("snow");
      } else if (response.weather[0].main === 'Rain') {
        $('.animation').text("rain");
      } else {
        $('.animation').text("");
      }
    }).fail(function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.responseText}. Please try again.`);
    });
  });
});
