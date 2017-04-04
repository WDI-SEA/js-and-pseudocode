/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/
var name = "Peter";

var age = 26;

var address = "518 N 64th Street";

var info = "hello! My name is," + " " + name + ". " + "I am " + age + " " + "years old and live at " + address + ".";

console.log(info);

console.log(`hello! My name is, ${name} i am ${age} years old and live at ${address}`);

var findthirdside = function(a, b) {
    return Math.sqrt(a * a + b * b)
};

console.log(findthirdside(3, 4));


var numbers = [20, 3, 5, 7, 13, 30];

var biggest = 0;

for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i]
    }
};
console.log(biggest);
