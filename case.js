const userName = 'blackPink'
const userInput = 'blackPinK'
console.log(userName.toLowerCase());
console.log(userInput.toLowerCase());

if (userName.toLowerCase === userInput.toLowerCase) {
    console.log('valid user')
}
else {
    console.log('invalid user')
}


let sum = 0;
for (let i = 0; i <= 3; i++) {
    sum = sum + i;
}
console.log(sum);