const fs = require("fs");
const chalk = require("chalk");

const firstCharToUpperCase = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const writeFile = (path, data, responseMessage) => {
  fs.writeFile(path, data, function(err) {
    if (err) return console.log(chalk.red(err));
    console.log(chalk.green(`${responseMessage}`));
  });
};

const splitUpperCaseWithDash = (tag) => {
  return tag
    .match(/[A-Z][a-z]+/g)
    .join("-")
    .toLowerCase();
};

module.exports = {
  firstCharToUpperCase,
  writeFile,
  splitUpperCaseWithDash,
};
