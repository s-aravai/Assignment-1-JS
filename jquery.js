// Getting an error with the ready function, so used the shorthand method for the same.
jQuery(function() {
    // Wait 10 seconds (10000ms), then fade in the greeting over 10 seconds
    setTimeout(function() {
      $("#greeting").fadeIn(20000);
    }); // Wait 10 seconds before starting the fade-in
  });





/* Weather */

function convertFahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }
  

  var convertCelsiusToKelvin = function(celsius) {
    return celsius + 273.15;
  };
  
  
  $(document).ready(function() {
    // We use jQuery to select the button with id="convertBtn"
    // Then attach a "click" event with an anonymous callback function
    $("#convertBtn").click(function() {
      // 1. Grab the Fahrenheit value from the input box #tempF
      //    Using jQuery's .val() method to get the input value
      var tempFVal = $("#tempF").val();
  
      // 2. Convert the string to a number
      var fahrenheit = parseFloat(tempFVal);
  
      // 3. Check if it's a valid number
      if (isNaN(fahrenheit)) {
        // If not valid, we can show an error
        $("#celsiusResult").text("Please enter a valid number for Fahrenheit!");
        $("#kelvinResult").text("");
        return; // Stop execution
      }
  
      // 4. Use the named function to convert Fahrenheit to Celsius
      var celsius = convertFahrenheitToCelsius(fahrenheit);
  
      // 5. Use the anonymous function expression to convert Celsius to Kelvin
      var kelvin = convertCelsiusToKelvin(celsius);
  
      // 6. Display the results using jQuery's .text() method
      //    #celsiusResult is the ID for displaying Celsius
      $("#celsiusResult").text("Celsius: " + celsius.toFixed(2) + "°C");
      //    #kelvinResult is the ID for displaying Kelvin
      $("#kelvinResult").text("Kelvin: " + kelvin.toFixed(2) + "K");
    });
  });
  