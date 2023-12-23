//task1
console.log('Task1');
let userNumber1 = Number(prompt('Enter number'));
let userNumber2 = Number(prompt('Enter number'));
const toCube = (number) => Math.pow(number, 3);
console.log(`Cube for ${userNumber1} = ${toCube(userNumber1)}\nCube for ${userNumber2} = ${toCube(userNumber2)}`);
console.log(`Sum = ${toCube(userNumber1) + toCube(userNumber2)}`);


//task2
console.log('Task2');
let userSalary = Number(prompt('enter number'));
checkAndCount(userSalary);
function checkAndCount(value) {
    if (isNaN(value) === true) {
        console.log('Your entered not a number! Please enter number!');
    }
    else {
        console.log(`Your salary after taxes is ${countSalary(value)}`);
    }
}
function countSalary(salary) {
    return salary * 0.87;
}


//task3
console.log('Task3');
let number1 = Number(prompt('Enter first number'));
let number2 = Number(prompt('Enter second number'));
let number3 = Number(prompt('Enter third number'));
findMax(number1, number2, number3);
function findMax(a, b, c) {
    if (b > a && b >= c) {
        console.log(`Max is ${b}`);
    } else if (c > a && c >= b) {
        console.log(`Max is ${c}`);
    } else {
        console.log(`Max is ${a}`);
    }
}


//task4
console.log('Task4');
const sumNumbers = (a, b) => {
    return a + b;
}
const multiplyNumbers = (a, b) => {
    return a * b;
}
const divisionNumbers = (a, b) => {
    return a / b;
}
const differenceNumbers = (a, b) => {
    if (a > b) {
        return a - b;
    } else if (b > a) {
        return b - a;
    } else {
        return 0;
    }
}
console.log(`Sum = ${sumNumbers(2, 4)}`);
console.log(`Multiply = ${multiplyNumbers(2, 4)}`);
console.log(`Division = ${divisionNumbers(2, 4)}`);
console.log(`Difference from bigger = ${differenceNumbers(2, 4)}`);