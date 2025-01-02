// Append values to the display
// function accepts a single parameter, value, which represents the value to be appended.
// retrieves the HTML element with the ID "result" 
// appends the value passed to the function to the existing value of the resultField.
function AppendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
}

// Clears the display
function clearResult() {
    document.getElementById("result").value = "";
}

// Evaluate and display the result of a calculation entered by the user
// Retrieves the HTML element with the ID "result"
// Handle potential errors during the calculation.

function calculateResult() {
  const resultField = document.getElementById("result");
  try {
// Use mathjs to evaluate the expression
    const result = mathjs.evaluate(resultField.value); 
    resultField.value = result; 
  } catch (error) {
    resultField.value = "Error"; 
  }
}

// calculate and display the square root of a number entered by the user
// retrieved element is stored in a constant variable named resultField
// result of the Math.sqrt() calculation is then assigned back to the resultField.value,  displaying the calculated square root in the input field
function calculateSquareRoot() {
    const resultField = document.getElementById("result");
    resultField.value = Math.sqrt(parseFloat(resultField.value));
}

//convert a given number into its corresponding percentage value.
//Retrieves html element and retrieved element is stored in a constant variable named resultField
//calculated percentage value is then assigned back to the resultField.value, effectively displaying the percentage in the input field.
function calculatePercentage() {
    const resultField = document.getElementById("result");
    resultField.value = parseFloat(resultField.value) / 100;
}

//calculate and display the square of a given number
function calculatePower() {
    const resultField = document.getElementById("result");
    resultField.value = Math.pow(parseFloat(resultField.value), 2);
}

//calculate and display the result of a number raised to a given power.
//user's input is then converted to a floating-point number using parseFloat() and stored in the base constant.
function calculateExponent() {
    const base = parseFloat(prompt("Enter base:"));
    const exponent = parseFloat(prompt("Enter exponent:"));
    if (!isNaN(base) && !isNaN(exponent)) {
        document.getElementById("result").value = Math.pow(base, exponent);
    }
}

//calculate and display the sine of an angle entered by the user.
function calculateSine() {
    const resultField = document.getElementById("result");
    resultField.value = Math.sin(parseFloat(resultField.value) * (Math.PI / 180));
}

//calculate and display the cosine of an angle entered by the user.
function calculateCosine() {
    const resultField = document.getElementById("result");
    resultField.value = Math.cos(parseFloat(resultField.value) * (Math.PI / 180));
}

//function retrieves the angle in degrees entered by the user in the "result" field
//converts it to radians
//calculates the tangent of the angle using the Math.tan() function
//updates the "result" field with the calculated tangent value.
function calculateTangent() {
    const resultField = document.getElementById("result");
    resultField.value = Math.tan(parseFloat(resultField.value) * (Math.PI / 180));
}

//function retrieves the number entered by the user in the "result" field
//converts it to a floating-point number
//calculates its base-10 logarithm using the Math.log10() function
//updates the "result" field with the calculated logarithm value.
function calculateLog() {
    const resultField = document.getElementById("result");
    resultField.value = Math.log10(parseFloat(resultField.value));
}

//The calculateLn function retrieves the number entered by the user in the "result" field.
//converts it to a floating-point number
//calculates its natural logarithm using the Math.log() function
//updates the "result" field with the calculated natural logarithm value.
function calculateLn() {
    const resultField = document.getElementById("result");
    resultField.value = Math.log(parseFloat(resultField.value));
}
