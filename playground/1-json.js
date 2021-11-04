const fs = require("fs");

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.author);

// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// 1. Load and parse the JSON data
const dataBuffer = fs.readFileSync('1-json.json');
// console.log(dataBuffer);
const dataJSON = dataBuffer.toString();
// console.log(dataJSON);
const user = JSON.parse(dataJSON);
// console.log(user.name);

// 2. Change the name and age property using your info
user.name = 'John';
user.age = 20;
// console.log(user);

// 3. Stringify the changed object and overwrite the original data
const userJSON = JSON.stringify(user);
// console.log(userJSON);
fs.writeFileSync('1-json.json', userJSON);
// 4. Test your work by viewing data in the JSON file