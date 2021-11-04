// Challenge: use chalk library in your PromiseRejectionEvent

// 1. Install version 2.4.1 of chalk
// 2. Load chalk into app.js
const chalk = require('chalk');
// 3. Use it to print the string "Success!" to the console in green
console.log(chalk.green('Success!'));
// 4. Test your work

// Bonus: use the docs to mess around with other styles. Make the text bold and inversed.
console.log(chalk.green.inverse.bold.inverse('Success!'));
