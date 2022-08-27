function reverseWords(str) {
    const words = str.split(' ');
    // console.log(words);
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    // console.log(result);
    const reversed = result.join(' ');
    return reversed;
}
const myString = 'I am a good boy';
const reverseJoint = reverseWords(myString);
console.log(reverseJoint)
