function celsiusToFahrenheit(degree) {
    let temp = degree * (9 / 5) + 32;
    console.log(`Temperature in Fahrenheit = ${temp}`);
   }
  
   celsiusToFahrenheit(20);

   function fahrenheitToCelsius(degree) {
    let temp = (degree - 32) * (5 / 9);
    console.log(`Temperature in Celsius = ${temp}`);
   }
  
   fahrenheitToCelsius(68);