"use strict";

/* Manipulate the DOM */

const $h2 = document.getElementById("subtitle");

$h2.style.color = "red"; // This is a hex color code for a shade of blue

/* CRUD operations on the DOM */
// Create, Read, Update, Delete
$h2.textContent = "My first HTML document - Updated"; // Update the text content of the h2 element
console.log($h2);