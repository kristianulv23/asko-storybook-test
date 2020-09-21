#! /usr/bin/env node
// will tell shell enviroment which program it needs execute this, in our case it's node
// always run your code in strict mode
"use strict";

const fs = require("fs");
const { prompt } = require("enquirer");
const chalk = require("chalk");

const { firstCharToUpperCase, writeFile } = require("./utils");

const {
  vueTemplate,
  packageJsonTemplate,
  testTemplate,
  storyTemplate,
  indexTemplate,
  styledTemplate,
  readmeTemplate,
} = require("./templates");

prompt({
  type: "input",
  name: "package",
  message: "Package Name:",
}).then((response) => {
  const packageName = `Asko${firstCharToUpperCase(response.package)}`;
  const successMessage = "created successfully ...";

  if (fs.existsSync(`./src/components/${packageName}`)) {
    console.log(chalk.yellow("Directory already exist ..."));
    return;
  }

  fs.promises
    .mkdir(`./src/components/${packageName}`, {
      recursive: true,
    })
    .then((path) => {
      console.log(chalk.green(`Created directory at ${path} ...`));
      return path;
    })
    .then((path) => {
      writeFile(
        `${path}/${packageName}.vue`,
        vueTemplate(packageName),
        `${packageName}.vue ${successMessage}`
      );
      writeFile(
        `${path}/index.js`,
        indexTemplate(packageName),
        `index.js ${successMessage}`
      );
      writeFile(
        `${path}/README.md`,
        readmeTemplate(packageName),
        `README.md ${successMessage}`
      );
      writeFile(
        `${path}/style.js`,
        styledTemplate(packageName),
        `style.js ${successMessage}`
      );
      writeFile(
        `${path}/package.json`,
        packageJsonTemplate(packageName),
        `package.json ${successMessage}`
      );
      writeFile(
        `./tests/unit/${packageName.toLowerCase()}.spec.js`,
        testTemplate(packageName),
        `${packageName.toLowerCase()}.spec.js ${successMessage}`
      );
      writeFile(
        `./src/stories/${packageName}.stories.js`,
        storyTemplate(packageName),
        `${packageName}.stories.js ${successMessage}`
      );
    });
});
