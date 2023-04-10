const convertToCelsius = function (fahrenheit) {
  var celsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celsius * 10) / 10; // round to 1 decimal
};

const convertToFahrenheit = function (celsius) {
  var fahrenheit = (celsius * 9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10; // round to 1 decimal
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
