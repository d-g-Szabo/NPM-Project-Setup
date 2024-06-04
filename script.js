// Old way of importing data
// const cowsay = require("cowsay"); //commonjs
// console.log(cowsay.say({ text: "Hello World!" }));

// New way of importing data
// for ES6 to work, I need to specify the type of app that we are running in the package.json file
import cowsay from "cowsay"; //ES6
console.log(cowsay.say({ text: "I am a mooooooooooodule!", e: "oO", t: "U" }));

import chalk from "chalk";
import { log } from "console";
console.log(chalk.redBright("Hello world!"));

log(`
CPU: ${chalk.red("90%")}
RAM: ${chalk.green("40%")}
DISK: ${chalk.yellow("70%")}
`);
