//Lab1 task2
alert("This is the first release of my calculator it only has a summation feature!!");
var num1 = prompt("Please enter your first number: ");
var num2 = prompt("Please enter your second number: ");
if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter a number");
} else {
    var result = Number(num1) + Number(num2);
    alert("The summation result is " + result);
}