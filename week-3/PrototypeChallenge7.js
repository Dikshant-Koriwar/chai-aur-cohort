// You need to implement the Employee constructor function and its prototype method

function Employee(name, position, salary) {
    this.name = name;
  this.position = position;
  this.salary = salary;
}

Employee.prototype.applyBonus = function (percent) {
  this.salary += Math.round((this.salary * percent) / 100);
};
// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { name, position, salary, bonus } = JSON.parse(input);
  const employee = new Employee(name, position, salary);
  employee.applyBonus(bonus);
  process.stdout.write(JSON.stringify(employee.salary));
});
