var employee= require('./employee');


var empdetails = {
    
    emp : new employee(3,2),
    
    displaydetails: function(){
        console.log('Employee: '+ this.emp.fullname + ' belongs to Dept: ' + this.emp.departmentName );
    }
};

module.exports = empdetails;