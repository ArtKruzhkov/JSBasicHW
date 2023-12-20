//task1
console.log('Task1');
let num1 = Number(prompt("Enter number 1"));
let num2 = Number(prompt("Enter number 2"));
if (num1 <= 1) {
    console.log(`You entered ${num1} for number 1.\n${num1} <= 1`);
} else {
    console.log(`You entered ${num1} for number 1.\n${num1} > 1`);
}
if (num2 >= 3) {
    console.log(`You entered ${num2} for number 2.\n${num2} >= 3`);
} else {
    console.log(`You entered ${num2} for number 2.\n${num2} < 3`);
}

//task2
console.log('Task2');
let test = true;
(test === true) ? console.log('+++') : console.log('---');

//task3
console.log('Task3');
let day = Number(prompt("Enter day of the month from 1 to 31"));
if (day <= 10) {
    console.log(`Day ${day} is in first decade of the month`);
} else if ((10 < day) && (day <= 20)) {
    console.log(`Day ${day} is in second decade of the month`);
} else if ((20 < day) && (day <= 31)) {
    console.log(`Day ${day} is in third decade of the month`);
}

//task4 
console.log('Task4');
// function countDigits(number) {
//     const units = number % 10;
//     const tens = Math.floor((number % 100) / 10);
//     const hungreds = Math.floor(number / 100);

//     return `In number ${number} количество сотен: ${hungreds}, десятков: ${tens}, единиц: ${units}`;
// }
function countDigits(number) {
    const units = Math.floor(number % 10);
    const tens = Math.floor((number % 100) / 10);
    const hundreds = Math.floor((number % 1000) / 100);

    return `В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`;
}

let userNumber = Number(prompt("Enter your number for count units"));
console.log(countDigits(userNumber));
