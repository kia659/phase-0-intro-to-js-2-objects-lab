let employee = {name: "sam", streetAddress: "12 Broadway"}
function updateEmployeeWithKeyAndValue(employee, key, value){
   const newObj ={ ...employee};
   newObj[key] = value;
   return newObj;
   console.log (newObj)
   console.log (key)
   console.log (value)

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key] = value;
   return employee;
}

function  deleteFromEmployeeByKey(employee, key) {
    const newObj ={...employee};
    delete newObj[key]
    return newObj;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
    

}