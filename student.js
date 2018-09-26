'use strict';
function makeStudentsReport(data) {
  let studentReport = [];
  for (let i = 0; i < data.length; i++) {
    let name = data[i].name;
    let grade = data[i].grade;
    studentReport.push(`${name}: ${grade}`);
  }
  return studentReport;
}
const testData = [
  { name: 'Jane Doe', grade: 'A' },
  { name: 'John Dough', grade: 'B' },
  { name: 'Jill Do', grade: 'A' },
];
console.log(makeStudentsReport(testData));