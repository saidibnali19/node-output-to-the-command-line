console.log("My %s has %d ears", "cat", 2);

const x = 1;
const y = 2;
const z = 3;

console.count(`The value of x is ${x} and has been checked .. how many times?`);
console.count(`The value of x is ${x} and has been checked .. how many times?`);
console.count(`The value of y is ${y} and has been checked .. how many times?`);

const oranges = ["orange", "orange"];
const apples = ["just one apple"];

oranges.forEach((fruit) => console.count(fruit));

apples.forEach((fruit) => console.count(fruit));

console.countReset("orange");

oranges.forEach((fruit) => console.count(fruit));

console.clear();

function function2() {
  console.trace();
}

function function1() {
  function2();
}

function1();

function doSomething() {
  console.log("test");
}

function measureDoingSomething() {
  console.time("doSomething()");
  doSomething();
  console.timeEnd("doSomething()");
}

measureDoingSomething();

function uppercase(string) {
  return string.toUpperCase();
}

function measureUppercase() {
  console.time("uppercase('data')");
  uppercase("data");
  console.timeEnd("uppercase('data')");
}

measureUppercase();

console.log('\x1b[33m%s\x1b[0m', 'hi!');


const chalk = require("chalk")

console.log(chalk.yellow("hi!"))

console.log(chalk.bold.italic.blue("Hello world!"))

const ProgressBar = require("progress")

const bar = new ProgressBar(":bar", {total: 10})

const timer = setInterval(() => {
    bar.tick()
    if (bar.complete) clearInterval(timer)
}, 100)