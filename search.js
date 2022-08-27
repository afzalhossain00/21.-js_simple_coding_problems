const search = 'My name is mr. Name.are you okay'
const searchString = 'Name';
// name is case sensitive
// const doseExist = search.includes('Name')
// const doseExist = search.includes('name')
// const doseExist = search.includes('searchString');

const searchLowerCase = searchString.toLowerCase();
const doseExist = searchLowerCase.includes(searchLowerCase);

const doseExistOneLine = search.toLowerCase().includes(searchString.toLowerCase());
console.log(doseExist);
console.log(doseExistOneLine);


// indexof
console.log(search.indexOf('name'));
console.log(search.indexOf('Name'));
if (search.indexOf('you') !== -1) {
    console.log('exists in the string')
}
else {

    console.log('cannot find it')
}

// startswith
console.log(search.startsWith('My'));

// endswith
const fileName = 'biodata.pdf'
const otherFile = 'pic.png'
console.log(fileName.endsWith('pdf'));