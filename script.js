console.log('script.js is sourced');
// array added emplyees are stored
var employee = [];
var totalSalary = [];

var addEmployee = function(){
  console.log('in addEmployee');
  var newEmp = {
    first: document.getElementById('firstName').value,
    last: document.getElementById('lastName').value,
    id: document.getElementById('idNumber').value,
    title: document.getElementById('jobTitle').value,
    salary: document.getElementById('annualSalary').value
  };
  if (newEmp.first == '' || newEmp.last == '' || newEmp.id == '' || newEmp.title == '' || newEmp.salary == ''){
    alert('All fields are required');
  }else{

  clearInputs();
  // push employee emp info into employee array
  employee.push( newEmp );
  // push salary info into totalSalary array for monthly calc
  totalSalary.push( parseInt(newEmp.salary ));
  console.log(employee);
  console.log(totalSalary);
  displaySalary();
  }
};

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

    // if (employee[ i ].salary.length >= 1 ) {
      // totalSalary += parseInt(employee[ i ].salary);
    // }
    var employeeInfo = '<h3>' + employee[ i ].first + ' ' + employee[ i ].last + ' ' + '<br>Id number: ' + employee[ i ].id + ' ' + '<br>Job: ' + employee[ i ].title + ' ' + '<br>Annual Salary: ' +
     employee[ i ].salary + '<br><button onClick="terminate(' + i + ')">Remove employee</button></h3>';

    // display in DOM employee info

    document.getElementById('allSalary').innerHTML += employeeInfo;

    // document.getElementById('allSalary').innerHTML += monthlySalary;
    // console.log('total Salary:', totalSalary);
    var salaryAdd = function( total, num ){
      return total + num;
    };
    var total = totalSalary.reduce( salaryAdd);
    var monthlySalary = '<br><h3>Monthly salary cost: ' + Math.round(total / 12);
    console.log(total);
    document.getElementById('cost').innerHTML = monthlySalary;
  }

};

var terminate = function( index ){
  console.log('Removing', employee[ index ].first + ' ' + employee[ index ].last );

  employee.splice( index, 1 );
  totalSalary.splice( index, 1);
  var salaryAdd = function( total, num ){
    return total + num;
  };
  var total = totalSalary.reduce( salaryAdd);
  var monthlySalary = '<br><h3>Monthly salary cost: ' + Math.round(total / 12);
  console.log(total);
  document.getElementById('cost').innerHTML = monthlySalary;
  displaySalary();
};
