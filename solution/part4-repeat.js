var numbers = [20, 3, 5, 700, 13, 30];
var largest = 0;
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i]
    }
}

console.log(largest);
