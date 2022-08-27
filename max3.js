const jim = 99;
const dela = 95;
const chinku = 98;

if (jim > dela && jim > chinku) {
    console.log('jim will get the cake')
}
else if (dela > jim && dela > chinku) {
    console.log('dela will get the cake')
}
else {
    console.log('Chinku will get get the cake')
}

// Home work: 1
// write a function that will take 3 numbers will return the max number
// write a function that will take 3 parameters and will return the min number

// first time do it using if-else
// second time do it using Math.min  or Math.max


// function maxNumbers(numbers) {

//     if (value[0] > value[1] && value[0] > value[2]) {

//         console.log('largest')
//     }
//     else if (value[1] > value[0] && value[1] > value[2]) {
//         return value[1];
//     }
//     else {
//         return value[2];
//     }

// }
// const value = [99, 95, 95]
// const values = maxNumbers(value);
// console.log()


// function minNumbers(num1, num2, num3) {
//     const checkValue = Math.min(num1, num2, num3);
//     return checkValue;
// }
// const minValues = (99, 98, 95)
// const minValue = minNumbers(minValues);
// console.log(minValue);