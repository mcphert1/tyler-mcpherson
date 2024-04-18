var user = "Tyler";
var salutation = "Welcome";
var greeting = salutation + ", " + user + "!";

var greetingEl = document.getElementById('greeting');
greetingEl.textContent = greeting;

var price = 199;
var studentDiscountPercentage = 10;
var studentPrice = price - (price * studentDiscountPercentage / 100);

var priceEl = document.getElementById('price');
var studentPriceEl = document.getElementById('student-price');

priceEl.textContent = "Price: $" + price;
studentPriceEl.textContent = "Student Price: $" + studentPrice + " (" + studentDiscountPercentage + "% discount)";
