// Homework: Write a function to get the lowest number in an array

function minInArray(numbers) {
    let smallest = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        let index = i;
        let element = numbers[index];
        if (element < smallest)
            smallest = element;
    }
    return smallest;
}
const allHeights = [180, 130, 240, 110, 150, 80]
const lowest = minInArray(allHeights)
console.log('lowest value is:', lowest)
