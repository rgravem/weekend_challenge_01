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
  clearInputs();
  employee.push( newEmp );
  console.log(employee);
};

var clearInputs = function(){
  document.getElementById('firstName').value='';
  document.getElementById('lastName').value='';
  document.getElementById('idNumber').value='';
  document.getElementById('jobTitle').value='';
  document.getElementById('annualSalary').value='';

};
