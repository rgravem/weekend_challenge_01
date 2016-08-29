console.log('script.js is sourced');
// array added emplyees are stored
var employee = [];
// array to store only salary info in 1 place
var totalSalary = [];

var addEmployee = function(){
  console.log('in addEmployee');
  var newEmp = {
    first: document.getElementById('firstName').value,
    last: document.getElementById('lastName').value,
    id: document.getElementById('idNumber').value,
    title: document.getElementById('jobTitle').value,
    salary: document.getElementById('annualSalary').value
  };// make sure all fields are completed
  if (newEmp.first == '' || newEmp.last == '' || newEmp.id == '' || newEmp.title == '' || newEmp.salary == ''){
    alert('All fields are required');
  }else{
    // clears inputs after you submit
  clearInputs();
  // push employee info into employee array
  employee.push( newEmp );
  // push salary info into totalSalary array for monthly calc
  totalSalary.push( parseInt(newEmp.salary ));
  console.log(employee);
  console.log(totalSalary);
  // displays salary info on screen
  displaySalary();
  }
};// end addEmployee

var clearInputs = function(){
  // clears input fields
  document.getElementById('firstName').value='';
  document.getElementById('lastName').value='';
  document.getElementById('idNumber').value='';
  document.getElementById('jobTitle').value='';
  document.getElementById('annualSalary').value='';

};
var displaySalary = function(){
  console.log( 'in displaySalary' );
  // clear out the div
  document.getElementById('allSalary').innerHTML='';
  document.getElementById('cost').innerHTML='';

  for(var i = 0; i < employee.length; i++) {

    // variable to hold info to display in DOM
    var employeeInfo = '<h3>' + employee[ i ].first + ' ' + employee[ i ].last + ' ' + '<br>Id number: ' + employee[ i ].id + ' ' + '<br>Job: ' + employee[ i ].title + ' ' + '<br>Annual Salary: $' +
     employee[ i ].salary + '<br><button onClick="terminate(' + i + ')">Remove employee</button></h3>';

    // display in div 'allSalary' on DOM

    document.getElementById('allSalary').innerHTML += employeeInfo;

    // adds up salary in the totalSalary array
    var salaryAdd = function( total, num ){
      return total + num;
    };
    var total = totalSalary.reduce( salaryAdd);
    var monthlySalary = '<br><h2>Total Monthly salary cost: $' + Math.round(total / 12);
    console.log(total);
    // displays monthlySalary calculation in DOM in 'cost' div
    document.getElementById('cost').innerHTML = monthlySalary;
  }

};
// function removes employee and adjusts montly spend
var terminate = function( index ){
  console.log('Removing', employee[ index ].first + ' ' + employee[ index ].last );
// spliceing off employee from employee array and their salary from totalSalary array
  employee.splice( index, 1 );
  totalSalary.splice( index, 1);
  // recalculating monthlySalary after terminated empoyee values are spliced
  var salaryAdd = function( total, num ){
    return total + num;
  };
  var total = totalSalary.reduce( salaryAdd );
  var monthlySalary = '<br><h2>Total monthly salary cost: $' + Math.round(total / 12);
  console.log(total);
  // displaying new values in the DOM
  document.getElementById('cost').innerHTML = monthlySalary;
  displaySalary();
};
