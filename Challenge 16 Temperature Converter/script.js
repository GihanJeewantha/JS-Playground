/*Problem:
Create a simple web application where the user can input a temperature in Celsius or Fahrenheit, and the app will convert it to the other unit.

Requirements:

Use HTML for the structure, CSS for styling, and JavaScript for the functionality.
There should be two input fields: one for Celsius and one for Fahrenheit.
When the user enters a value in either input, the corresponding temperature in the other unit should be automatically calculated and displayed.
The app should have a button to trigger the conversion. */

function convertTemperature() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = document.getElementById('fahrenheit').value;

    if (celsius !== "") {
        const fahrenheitValue = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = fahrenheitValue.toFixed(2);
    } else if (fahrenheit !== "") {
        const celsiusValue = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = celsiusValue.toFixed(2);
    }
}
