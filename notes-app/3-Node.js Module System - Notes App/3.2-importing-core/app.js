// lesson1
const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Chris.');

// challenge1: Append a message to notes.txt

// 1. Use appendFileSync to append to the file
fs.appendFileSync('notes.txt', ' I live in Brazil.');
