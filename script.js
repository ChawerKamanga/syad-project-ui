let a, b;
let element = document.querySelector("p");

function init() {
  a = parseInt(document.querySelector("#num1").value);
  b = parseInt(document.querySelector("#num2").value);
}

function sum() {
  // init();
  let sum = a + b;
  element.innerText = "The sum is " + sum;
}

function difference() {
  init();
  let difference = a - b;
  element.innerText = "The difference is " + difference;
}

function division() {
  init();
  let division = a / b;
  element.innerText = "The Quotent is " + division;
}

function product() {
  init();
  let product = a * b;
  element.innerText = "The product is " + product;
}
