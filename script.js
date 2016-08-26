console.log('script.js is sourced');
var employee = [];

var addEmployee = function(){
  console.log('in addEmployee');
  var newEmp = {
    first: document.getElementById('firstName').value,
    last: document.getElementById('lastName').value,
    id: document.getElementById('idNumber').value,
    title: document.getElementById('jobTitle').value,
    salary: document.getElementById('annualSalary').value
  };
  employee.push( newEmp );
  console.log(employee);
};
