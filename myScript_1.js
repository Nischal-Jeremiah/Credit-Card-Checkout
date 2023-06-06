// Expiry Date Format

function formatString(e) {
  var inputChar = String.fromCharCode(event.keyCode);
  var code = event.keyCode;
  var allowedKeys = [8];
  if (allowedKeys.indexOf(code) !== -1) {
    return;
  }

  event.target.value = event.target.value.replace(
    /^([1-9]\/|[2-9])$/g, '0$1/' // 3 > 03/
  ).replace(
    /^(0[1-9]|1[0-2])$/g, '$1/' // 11 > 11/
  ).replace(
    /^([0-1])([3-9])$/g, '0$1/$2' // 13 > 01/3
  ).replace(
    /^(0?[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2' // 141 > 01/41
  ).replace(
    /^([0]+)\/|[0]+$/g, '0' // 0/ > 0 and 00 > 0
  ).replace(
    /[^\d\/]|^[\/]*$/g, '' // To allow only digits and `/`
  ).replace(
    /\/\//g, '/' // Prevent entering more than 1 `/`
  );
}


// Saving Files

let saveFile = () => {
// Get the data from each element on the form.
const name = document.getElementById("emailInput");
const age = document.getElementById("cstCCNumber");
const email = document.getElementById("inputExpDate");
const country = document.getElementById("cc-cvv");
// const msg = document.getElementById("msg");

// This variable stores all the data.
let data = "\r Email Address: " + name.value + " \r\n " + "Credit Card Number: " + age.value + " \r\n " + "Expiry Date: " + email.value + " \r\n " + "CVV: " + country.value
console.log(data); //printing form data into the console
// Convert the text to BLOB.
const textToBLOB = new Blob([data], { type: "text/plain" });
var filename = new Date();
var month =new Date(); //months from 1-12
month = month.getMonth();

var day = new Date();
var day = day.getUTCDate();

var year = new Date();
var year = year.getUTCFullYear();

newdate = year + "/" + month + "/" + day;
const sFileName = filename; // The file to save the data.

let newLink = document.createElement("a");
newLink.download = new Date();

if (window.webkitURL != null) {
  newLink.href = window.webkitURL.createObjectURL(textToBLOB);
} else {
  newLink.href = window.URL.createObjectURL(textToBLOB);
  newLink.style.display = "none";
  document.body.appendChild(newLink);
}

newLink.click();
};