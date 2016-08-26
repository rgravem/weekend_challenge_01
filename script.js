console.log('script.js is sourced');
var employee = [];

var addEmployee = function(){
  console.log('in addEmployee');
  var newEmp = {
    first: getElementById('firstName').value,
    last: getElementById('lastName').value,
    id: getElementById('idNumber').value,
    title: getElementById('jobTitle').value,
    salary: getElementById('annualSalary').value
  };
  console.log( newEmp );
  employee.push( newEmp );
};
