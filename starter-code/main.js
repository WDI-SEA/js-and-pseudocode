/*
	Part 1: Create three variables: name, age, address.
	Create a fourth variable, greeting, that combines these 3 variables
	to form a greeting.
	For example, "Hello, I'm Anthony, I'm 20 years old and live in 100 Main St."
	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

var name = "Alaina"
var age = 28;
var address = "West Seattle";

var greeting = `Hello, I'm ${name}. I'm ${age} years old and live in ${address}.`;


/*
	Part 2: Create another variable called greeting2. This time, use the
	new ES6 Syntax, string interpolation, to create the same greeting.

	Hint: String interpolation uses backticks (`) instead of quotation marks.

	Log this variable to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.

*/

var name = "Alaina"
var age = 28;
var address = "West Seattle";

var greeting = `Hello, I'm ${name}. I'm ${age} years old and live in ${address}.`;


/*
	Part 3: Pythagorean theorem. We will be using the Math object we saw earlier
	in the lesson for this problem.

	Create 2 variables, side1 and side2, which represent two sides of a triangle.
	Assign these variables any positive integer values.
	Create a third variable, side3, which represents the hypotenuse of the triangle.

	Use the Pythogorean theorem to solve for the value of side3.
	(https://en.wikipedia.org/wiki/Pythagorean_theorem)

	Hint: Take a look at the MDN reference for more information about the Math object.
	(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

	Hint: We need to be able to calculate the square root of a number to find the
	value of the hypotenuse. Does the Math object give us a function to find the square root?

	Hint: We need to be able to calculate the square of a number to find the value
	of the hypotenuse. Does the Math object give us a function find the square of a number?

	Log the side1, side2 and side3 variables to the console (console.log(yourVariableName)).
	Check the console to make sure you're getting the desired result.
*/

var side1 = 3;
var side2 = 3;
var side3 = Math.sqrt(Math.pow(side1, 2) + Math.pow(side2, 2));

console.log(side3);


/*
	Part 4: (No coding is needed for this part).
	We are given a list of 20 numbers. We have to go through the list and find the
	largest number.

	What would the pseudocode for this problem look like? What variables would we need?

	Hint: How would we solve this problem if we had to do this with pencil and paper?
	What number would we write down to remember? Anything that you write down probably belongs in a variable.

	Bonus: What would the pseudocode look like if you also had to find the smallest number?
*/


list of 20 numbers
need to find largest number
if newNumber is larger than number currently in bin1, empty bin1 and place newNumber

create an array with 20 numbers
bin1 = largest number

evaluate number[0] and[1],
    if [0] > [1], [0] = bin1;
if [1] > [0], [1] = bin1;

loop through array, [1] > [2], etc.if number is larger, replace number currently in bin1 with new number.
