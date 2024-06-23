/*
<!--Lewis Strother-->
<!--WEB115-0001-->
<!--Assignment 8: Forms-->
*/

// JavaScript code for form validation

// Create event listener for when content loads
// lts - document.addEventListener("load", function() { // does not hold input ???why???
document.addEventListener("DOMContentLoaded", function() {  

  let form = document.getElementById("myForm"); // lts - form element is "myForm"

  form.addEventListener("submit", function(evt) { // lts - event listener for form submit
	  // Prevent form from submitting
    evt.preventDefault(); // lts - pg#242 use the method "preventDefault()"


    // Retrieve the input field value
    let inputField = document.getElementById("inputField").value;
    console.log(inputField);


    // Regular expression pattern for alphanumeric input
    // let validate = /^[a-zA-Z0-9]/i; // lts - does not catch invalid after first true
    let validate = /^[a-zA-Z0-9]+$/i; // catches any error

    
    // Check if the input value matches the pattern
    let validateResult = validate.test(inputField); // lts - pg#238 - testing agains regular expression
    console.log (validateResult); // lts - displays the TRUE/FALSE

    if (validateResult === false) {
      // Invalid input: display error message
      document.getElementById("alert").innerHTML = "INVALID INPUT:  Please enter ONLY letters and/or numbers";
    } else {
      // Valid input: display confirmation and submit the form
      document.getElementById("alert").innerHTML = "VALID INPUT: Congratuation!!! you followed instructions";
    }

  });// lts - FROM form.addEventListener("submit", function(event) {

});// lts - FROM document.addEventListener(load,function() {