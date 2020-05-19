$(document).ready(readyNow);

function readyNow(){
}




const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

function calcBonus(employee) {
  
  const obj = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0
  }

  // Calculate the bonus percentage
  if (employee.reviewRating === 3) {
    obj.bonusPercentage = 0.04;
  }
  else if (employee.reviewRating === 4){
    obj.bonusPercentage = 0.06;
  }
  else if (employee.reviewRating === 5){
    obj.bonusPercentage = 0.10;
  }

  // see if they get a 5% bump
  if (employee.employeeNumber.length === 4 ) {
    obj.bonusPercentage += 0.05;
  }
  if (employee.annualSalary > 65000) {
    obj.bonusPercentage - 0.01;
  }
  if (obj.bonusPercentage > 0.13) {
    obj.bonusPercentage = 0.13;
  }
  obj.totalBonus = employee.annualSalary * obj.bonusPercentage;
  obj.totalCompensation = Number(obj.totalBonus) + Number(employee.annualSalary);

  // finally, no one can get more than 13%

  // calculate the totalBonus:
  // salary * bonusPercentage (total bonus money)

  // calculate the total compensation
  // totalBonus + salary

  // figure out what bonus etc. they're going to have
  return obj;
}

// testing purposes
const employee1 = employees[0]; // grab the first employee
const testResult1 = calcBonus(employee1);
console.log(testResult1);
/* 
  Create a function that takes in an employee
    For that employee, calculate the bonus
    Return a new object with the bonus defined, etc.
*/

// prints out new object array with bonus.
function employeeBonus(array){
  let newObj = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newObj.push(calcBonus(element));
  }
return newObj;
}
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
