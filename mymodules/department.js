
var departmentMaster = [{
                         id:1,
                         name:'IT'
                     }, {
                         id:2,
                         name:'INFRA'
                     },{
                         id:3,
                         name:'SOFTWARE'
                     },{
                         id:4,
                         name:'IT'
                     }];

 function fetchDepartment (eid){
    var dept = departmentMaster.filter(function(obj){
                if(obj.id === eid) 
                return obj; 
        });
        return dept[0].name; 
}
                            
function department(did) {
    this.id = did;
    this.name = fetchDepartment(did);
}
   
module.exports = department;