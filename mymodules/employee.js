var department= require('./department');

var employeeMaster = [{
                         id:1,
                         fname:'Niraj',
                         lname:'Sharma'
                     }, {
                         id:2,
                         fname:'Deepak',
                         lname:'Sharma'
                     },{
                         id:3,
                         fname:'Soni',
                         lname:'Sharma'
                     }];

function fetchEmployee (eid){
    var emp = employeeMaster.filter(function(obj){
                if(obj.id === eid) 
                return obj; 
        });
        return emp[0].fname + ' ' + emp[0].lname;
}

function employee(eid, did) {
    var dept= new department(did);
    this.id = eid;
    this.fullname = fetchEmployee(eid);
    this.departmentName =dept.name;
}

module.exports =  employee;