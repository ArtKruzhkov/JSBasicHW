//task1
// console.log('Task1');
// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - it is zero`);
//     } else if (i % 2 === 0) {
//         console.log(`${i} - even digit`);
//     } else if (i % 2 !== 0) {
//         console.log(`${i} - odd digit`);
//     }
// }

//task2
// console.log('Task2');
// const arrMain = [1, 2, 3, 4, 5, 6, 7];
// const arrNew = [];
// for (let i = 0; i < arrMain.length; i++) {
//     if (arrMain[i] !== 4 && arrMain[i] !== 5) {
//         arrNew.push(arrMain[i]);
//     } else {
//         continue;
//     }
// }
// console.log(arrMain);
// console.log(arrNew);

//task3
// console.log('Task3');
// const arrayRandom = [];
// for (let i = 0; i < 5; i++) {
//     arrayRandom.push(getRandomInt(9));
// }
// console.log(`This is random array: [${arrayRandom}]`);
// console.log(`Sum for elements in this array = ${sumElements(arrayRandom)}`);
// console.log(`Min digit in this array = ${findMin(arrayRandom)}`);
// findThree(arrayRandom);
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }
// function sumElements(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum = sum + array[i];
//     }
//     return sum;
// }
// function findMin(array) {
//     let min = array[0];
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < min) {
//             min = array[i];
//         } else {
//             continue;
//         }
//     }
//     return min;
// }
// function findThree(array) {
//     if (array.indexOf(3) !== -1) {
//         console.log(`3 is in this array in position ${array.indexOf(3)}`);
//     } else {
//         console.log('3 is not in this array');
//     }
// }

//task4
let string = '';
for (let i = 0; i < 21; i++) {
    console.log(string);
    string = string + 'x'
}